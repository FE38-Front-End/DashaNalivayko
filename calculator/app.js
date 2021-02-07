const calcBody = document.querySelector('.calcBody');
const viewer = document.querySelector('.viewer');
const ac = document.querySelector('.ac');
const ce = document.querySelector('.ce');
const equally = document.querySelector('.equally');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const percent = document.querySelector('.percent');
const sqrt = document.querySelector('.sqrt');
const plusMinus = document.querySelector('.plusMinus');
const powerNeg = document.querySelector('.powerNeg');
const sqr = document.querySelector('.sqr');
const factorial = document.querySelector('.factorial');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const powBtn = document.querySelector ('.powBtn');
const round = 4;
let buttonType;
let viewerArray;
let lastNumber;
let lastSign;
let penultSign;
let lastOperation;
let penultOperation;
let lastOperationIndex;
let firstNumber;
let operationsViewerArray;
let firstPart;
let isLastOperation;
let isOperation;
let lastSignFirstPart;
let penultSignFirstPart;

function replace () {
    for (let i = 0; i < viewer.textContent.length;  i++) {
        if ((viewer.textContent[i] == '×') || (viewer.textContent[i] == '÷') || (viewer.textContent[i] == '^')) {
            viewer.textContent = viewer.textContent.replace ('×','*');
            viewer.textContent = viewer.textContent.replace ('÷','/');
            viewer.textContent = viewer.textContent.replace ('^','**');

        }
    }
};

const operations = ['^', '×', '÷'];
[plus, minus, powBtn, multiply, divide].forEach ((elem) => {
    elem = elem.textContent;
    operations.push(elem);
});
// let operation = operations.forEach(element => {element.textContent});

// function around () {
//     if (!!(viewer.textContent - Math.trunc(viewer.textContent)) === true) {
//         viewer.textContent = (+viewer.textContent).toFixed(round);
//     }
//     if (viewer.textContent.length > 15) {
//         viewer.textContent = viewer.textContent.slice (0, 14);
//     }
//     return viewer.textContent
// }

// let g;
// g = viewer.textContent - Math.trunc(viewer.textContent);

calcBody.addEventListener('click', (event) => {
    if (lastOperation === '×') {
        lastOperation = '*'
    }
    if (lastOperation === '÷') {
        lastOperation = '/'
    }
    if (buttonType == equally) {
        replace();
        viewer.textContent = eval(viewer.textContent + lastOperation + lastNumber);
        buttonType = event.target;
        return
    }
    buttonType = event.target;
    debugger
    if (buttonType.tagName !== 'BUTTON') return;
    viewerArray = viewer.textContent.split('');
    lastSign = viewerArray[viewerArray.length-1];
    penultSign = viewerArray[viewerArray.length-2];
    firstNumber = `${parseInt(viewer.textContent)}`;
    operationsViewerArray = viewerArray.filter((sign) => isNaN(sign));
    lastOperation = operationsViewerArray[operationsViewerArray.length - 1];
    penultOperation = operationsViewerArray[operationsViewerArray.length - 2];

    if (lastOperation !== '.') {
        lastOperationIndex = viewerArray.lastIndexOf(lastOperation);
    } else {
        lastOperationIndex = viewerArray.lastIndexOf(penultOperation);
    };
    lastNumber = viewerArray.slice(lastOperationIndex +1).join('');
    firstPart = viewerArray.slice(0, -lastNumber.length).join('');
    if (lastNumber === '') {
        firstPart = viewer.textContent;
    }
    isLastOperation = operations.includes(lastSign);
    isOperation = operations.includes(buttonType.textContent);
    switch (buttonType.textContent) {
        case 'AC':
            viewer.textContent = '0';
        break;
        case '←':
            viewer.textContent = viewerArray.slice(0,-1).join('');
            if (viewer.textContent.length == 0) {
                viewer.textContent = '0';
            }
        break;
        case '%':
            // replace();
            // viewer.textContent = eval(viewer.textContent)/100;
        break;
        case '+/-':
            lastSignFirstPart = firstPart[firstPart.length-1];
            penultSignFirstPart = firstPart[firstPart.length-2];
            // смена минуса, если "до" стоит знак 
            if (lastSignFirstPart === '-' && operations.some((elem) => elem == penultSignFirstPart))  {
                firstPart = firstPart.split('').slice(0,-1).join('');
                viewer.textContent = firstPart + lastNumber;
                // смена минуса, если "до" число (не знак)
            } else if (lastSignFirstPart === '-' && !operations.some((elem) => elem == penultSignFirstPart)) {
                firstPart = firstPart.split('').slice(0,-1).join('');
                viewer.textContent = firstPart + '+' + lastNumber;
                // смена плюса
                } else {
                    viewer.textContent = firstPart + lastNumber * -1;
                }
        break;
        case '√x':
            replace();
            if (eval(viewer.textContent) > 0 ) {
                viewer.textContent = Math.sqrt(eval(viewer.textContent));
            } else {
                alert ('Введите положительное число');
            }
        break;
        case 'x2':
            replace();
            viewer.textContent = Math.pow(eval(viewer.textContent), 2);
        break;
        case 'x-1':
            replace();
            viewer.textContent = 1/eval(viewer.textContent);
        break;
        case 'xy':
            //запрет удвоения знака
            if (lastSign === '^' || lastSign === '.' || operations.some((elem) => elem == lastSign)) {
                viewer.textContent = viewer.textContent;
            } else {
                viewer.textContent += '^';
            }
        break;
        case 'x!':
            replace();
            const factorial = (n) => {
                if (n === 0) {
                    return 1;
                }
                return n * factorial(n - 1);
            };
            viewer.textContent = eval(viewer.textContent)
            if (((Number.isInteger(+viewer.textContent) === true)) && (viewer.textContent > 0)) {
                viewer.textContent = factorial(viewer.textContent);
            } else {
                alert ('Введите целое положительное число');
            }
            debugger
        break;
        case 'lg':
            replace();
            viewer.textContent = Math.log10(eval(viewer.textContent));
        break;
        case '.':
            let pointInLastNumber = lastNumber.split('').some((elem) => elem === ".");
            if (isLastOperation) {
                viewer.textContent += 0 + buttonType.textContent;
            } else if ((lastSign === '.') || (pointInLastNumber)) {
                viewer.textContent = viewer.textContent
            } else {
                viewer.textContent += buttonType.textContent;
            }
        break;
        case '=':
            replace();
            viewer.textContent = eval(viewer.textContent); 
        break;
        default:
            if (isLastOperation && isOperation) {
                viewerArray = viewerArray.slice(0,-1);
                viewer.textContent = viewerArray.join('') + buttonType.textContent;
            } else if ((lastSign === '0') && (operations.some((elem) => elem == penultSign))) {
                viewer.textContent = viewer.textContent
            } else {
                if ((viewer.textContent === "0") && (isOperation) && (lastSign === '.')) {
                    viewer.textContent = viewer.textContent
                    break
                };
                if (viewer.textContent === "0") {
                    viewer.textContent = '';
                };
                viewer.textContent += buttonType.textContent;
            }
                
            // if (viewer.textContent.length < 18) {
            //     viewer.textContent = viewer.textContent + num;
            // };
        break;
    }
    // if (!!g === true && g.length > 5) {
    //     viewer.textContent = (+viewer.textContent).toFixed(round);
    // } 
})


