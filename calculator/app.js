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
const powerVariable = document.querySelector('.powerVariable');
const factorial = document.querySelector('.factorial');
const round = 4;
let base;
let b;

function replace () {
    for (let i = 0; i < viewer.textContent.length;  i++) {
        if ((viewer.textContent[i] == '×') || (viewer.textContent[i] == '÷')) {
            viewer.textContent = viewer.textContent.replace ('×','*');
            viewer.textContent = viewer.textContent.replace ('÷','/');
        }
    }
};

function around () {
    if (!!(viewer.textContent - Math.trunc(viewer.textContent)) === true) {
        viewer.textContent = (+viewer.textContent).toFixed(round);
     }
}

for (let node of buttons.children) {
    let num = node.textContent;
    node.addEventListener ('click', () => {
        if (viewer.textContent == 0) {
            viewer.textContent = '';
        };
        // viewer.textContent.match = /^(?!(\d)\1{3})\d{5}$/;
        // if (viewer.textContent.length > 18) {
        //     viewer.textContent.length = 18;
        // }
        switch (num) {
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
            case '=':
                replace();
                if (viewer.textContent.includes('^')) {
                    base = viewer.textContent.split('^');
                    let pow = base[1];
                    base = base[0];
                    viewer.textContent = Math.pow(eval(base), pow);
                }
                viewer.textContent = eval(viewer.textContent); 
                around();
            break;
            case '%':
                replace();
                viewer.textContent = eval(viewer.textContent)/100;
                around();
            break;
            case '+/-':
                replace();
                viewer.textContent = eval(viewer.textContent)* -1;
                around();
            break;
            case '√x':
                replace();
                viewer.textContent = Math.sqrt(eval(viewer.textContent));
                around();
            break;
            case 'x2':
                replace();
                viewer.textContent = Math.pow(eval(viewer.textContent), 2);
                around();
            break;
            case 'x-1':
                replace();
                viewer.textContent = 1/eval(viewer.textContent);
                around();
            break;
            case 'xy':
                viewer.textContent += '^';
                around();
            break;
            case 'x!':
                replace();
                const factorial = (n) => {
                    if (n === 0) {
                      return 1;
                    }
                    return n * factorial(n - 1);
                };
                if (Number.isInteger(viewer.textContent) === true && viewer.textContent > 0) {
                    viewer.textContent = factorial(eval(viewer.textContent));
                } else {
                    alert ('Введите целое положительное число');
                }
            break;
            case 'lg':
                replace();
                viewer.textContent = Math.log10(eval(viewer.textContent));
                around();
            break;
            default:
                if (viewer.textContent.length < 18) {
                    viewer.textContent = viewer.textContent + num;
                };
                break;
        }
            
    });
}



