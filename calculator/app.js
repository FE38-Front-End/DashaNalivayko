const buttons = document.querySelector('.buttons');
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
const powerVariable = document.querySelector ('.powerVariable');
const round = 4;
let pow;
let base;
let b;

function replace () {
    for (let i = 0; i < viewer.textContent.length;  i++) {
        if ((viewer.textContent[i] == '×') || (viewer.textContent[i] == '÷') || (viewer.textContent[i] == '^')) {
            viewer.textContent = viewer.textContent.replace ('×','*');
            viewer.textContent = viewer.textContent.replace ('÷','/');
            viewer.textContent = viewer.textContent.replace ('^','**');
        }
    }
};

let operations = [plus, minus, powerVariable, multiply, divide];

operations.forEach ((elem) => {
    elem = operations.textContent;
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

let g;
g = viewer.textContent - Math.trunc(viewer.textContent);

buttons.addEventListener('click', (event) => {
    let buttonType = event.target;
    if (buttonType.tagName !== 'BUTTON') return;
    operations.some(function(elem) {
        if (elem === base) {
            return alert ('Введите число');
        }
    });

        
    //     // base = viewer.textContent.split('^');
    //     // pow = base[1];
    //     // base = base[0];
    //     // if (base.includes('+')) {
    //     //     plus = base.split('+');
    //     //     plus = base[base.length-1];
    //     // }
    //     // if (Number.isInteger(+plus)) {
    //     //     res = Math.pow(plus, pow);
    //     //     viewer.textContent = (plus[0] + res);
    //     // }
    //     debugger
    // }
    switch (buttonType.textContent) {
        case 'CE':
            localStorage.setItem('previousRes', viewer.textContent);
            viewer.textContent = '0';
            console.log(localStorage)
        break;
        case 'AC':
            viewer.textContent = '0';
            localStorage.clear();
            console.log(localStorage)
        break;
        case '%':
            replace();
            viewer.textContent = eval(viewer.textContent)/100;
            //around();
        break;
        case '+/-':
            replace();
            viewer.textContent = eval(viewer.textContent)* -1;
            //around();
        break;
        case '√x':
            replace();
            viewer.textContent = Math.sqrt(eval(viewer.textContent));
            //around();
        break;
        case 'x2':
            replace();
            viewer.textContent = Math.pow(eval(viewer.textContent), 2);
            // //around();
        break;
        case 'x-1':
            replace();
            viewer.textContent = 1/eval(viewer.textContent);
            //around();
        break;
        case 'xy':
            
            //запрет удвоения знака
            //запрет постановки знака после операций

            // for (let i = 0; i < operations.length;  i++) { 
                base = viewer.textContent.slice (-1);
                viewer.textContent += '^';

            // for (let i = 0; i < operations.length; i++) { 
            //     if (base !== operations[i]) {
            //         if ((i = operations.length-1) && (base !== operations[i])) {
            //             viewer.textContent += '^';
            //             break
            //         } 
            //     } else {
            //         alert ('Введите число');
            //         break
            //     }

            // }
                //     alert ('Введите число');
                //     break
                // } else {
                //     if (i = operations.length-1) {
                //         viewer.textContent += '^';
                //     }
                // }
            //     if (i = operations.length-1) {
            //         if (base !== operations[i]) {
            //         viewer.textContent += '^';
            //     }
            // }
            viewer.textContent = eval(viewer.textContent);
            debugger
            //around();
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
            if (Number.isInteger(+viewer.textContent) === true) {
                viewer.textContent = factorial(viewer.textContent);
            } else {
                alert ('Введите целое положительное число');
            }

        break;
        case 'lg':
            replace();
            viewer.textContent = Math.log10(eval(viewer.textContent));
            //around();
        break;
        case '=':
            replace();
            viewer.textContent = eval(viewer.textContent); 
            // viewer.textContent = ""

            // //для степени
            // if (viewer.textContent.includes('^')) {
            //     base = viewer.textContent.split('^');
            //     pow = base[1];
            //     base = base[0];
            //     if (base.includes('+')) {
            //         plus = base.split('+');
            //         plus = base[base.length-1];
            //     }
            //     if (Number.isInteger(+plus)) {
            //         res = Math.pow(plus, pow);
            //         viewer.textContent = (plus[0] + res);
            //     }
            //     debugger
            // }
        break;
        default:
            if (viewer.textContent == 0) {
                viewer.textContent = '';
            };
            viewer.textContent += buttonType.textContent;
            // if (viewer.textContent.length < 18) {
            //     viewer.textContent = viewer.textContent + num;
            // };
        break;
    }
    if (!!g === true && g.length > 5) {
        viewer.textContent = (+viewer.textContent).toFixed(round);
    } 
})

// if (buttonType === '=') {
//     viewer.textContent = '';
// }