// параметры

// let widthSquare = +prompt('Введите сторону квадрата, px');
// if (!widthSquare|| null ) {
//     alert('Введите число!');
//     } else {
//         widthCircle = +prompt('Введите диаметр круга, px');
//         if (!widthCircle || null) {
//             alert('Введите число!');
//         } else if (widthSquare <= widthCircle) {
//             circle.remove();
//             square.remove();
//             alert('Диаметр круга должен быть меньше стороны квадрата');
//             } else {
//                 step = +prompt('Введите шаг движения окружности, px');
//                 if (!step || null) {
//                     alert('Введите число!');
//                 } else if ((widthSquare - widthCircle)/2 <= step) {
//                     alert('Шаг движения окружности слишком большой для заданных параметров');
//                     circle.remove();
//                     square.remove();
//                 };
//             }; 
// };


const circle = document.querySelector('.circle');
const square = document.querySelector('.square');


let b;
let getB = function () {
    b = (widthSquare - widthCircle)/2;
    if (widthSquare < widthCircle) {
        alert('Диаметр круга должен быть меньше стороны квадрата');
        circle.style.visibility = 'hidden';
        square.style.visibility = 'hidden';
        document.querySelector('.widthSquare').value = "";
        document.querySelector('.widthCircle').value = "";
    }
    if (step >= b && b > 0) {
        alert('Круг может сделать по одному неполному шагу в каждую сторону');
    }
}

const addWidthSquare = document.querySelector('.addWidthSquare');
let widthSquare;
addWidthSquare.addEventListener('click', () => {
    widthSquare = +document.querySelector('.widthSquare').value;
    square.style.visibility = 'visible';
    if (!widthSquare || null ) {
        alert('Введите число!');
        document.querySelector('.widthSquare').value = "";
        } else {
            square.style.width = widthSquare + 'px';
            square.style.height = widthSquare + 'px';
            square.style.border = 'solid 2px darkblue';
            getB();
        }
});


const addWidthCircle = document.querySelector('.addWidthCircle');
let widthCircle = 0;
addWidthCircle.addEventListener('click', () => {
    widthCircle = +document.querySelector('.widthCircle').value;
    circle.style.visibility = 'visible';
    if (!widthCircle || null) {
        alert('Введите число!');
        document.querySelector('.widthCircle').value = "";
    } else {
        circle.style.width = widthCircle + 'px';
        circle.style.height = widthCircle + 'px';
        getB();
    }
    
});


const addStep = document.querySelector('.addStep');
let step;
addStep.addEventListener('click', () => {
    step = +document.querySelector('.step').value;
    if (!step || null) {
        alert('Введите число!');
        document.querySelector('.step').value = "";
    }
        else {
            getB();
        }
});


const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    document.querySelector('.widthSquare').value = "";
    document.querySelector('.widthCircle').value = "";
    document.querySelector('.step').value = "";
    circle.style.visibility = 'hidden';
    square.style.visibility = 'hidden';
    navLeft.classList.remove('disabled');
    navRight.classList.remove('disabled');
    navUp.classList.remove('disabled');
    navDown.classList.remove('disabled');
});


// навигация
let coordX = 0;
let coordY = 0;

const navLeft = document.querySelector('.navigation-left');
navLeft.addEventListener('click', () => {
    if (coordX > (-b) + step) {
        coordX -= step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navRight.classList.remove('disabled');
        navRight.disabled = false;
        console.log(b);
    } else {
        coordX = -b;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navLeft.classList.add('disabled');
        navLeft.disabled = true;
    }
});


const navRight = document.querySelector('.navigation-right');
navRight.addEventListener('click', () => {
    if (b - step >= coordX) {
        coordX += step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navLeft.classList.remove('disabled');
        navLeft.disabled = false;
    } else {
        coordX = b;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navRight.classList.add('disabled');
        navRight.disabled = true;
    }
});


const navUp = document.querySelector('.navigation-up');
navUp.addEventListener('click', () => {
    if (coordY > (-b) + step) {
        coordY -= step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navDown.classList.remove('disabled');
        navDown.disabled = false;
    } else {
        coordY = -b;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navUp.classList.add('disabled');
        navUp.disabled = true;
    }
});


const navDown = document.querySelector('.navigation-down');
navDown.addEventListener('click', () => {
    if (b - step > coordY) {
        coordY += step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navUp.classList.remove('disabled');
        navUp.disabled = false;
    } else {
        coordY = b;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navDown.classList.add('disabled');
        navDown.disabled = true;
    }   
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    coordY = 0;
    coordX = 0;
    circle.style.transform = `translate(${coordX}px,${coordY}px)`;
    navUp.disabled = false;
    navDown.disabled = false;
    navLeft.disabled = false;
    navRight.disabled = false;
    navUp.classList.remove('disabled');
    navDown.classList.remove('disabled');
    navLeft.classList.remove('disabled');
    navRight.classList.remove('disabled');
}); 








// const VALUE_KEY = 'value';

// function getValue() {
//     return localStorage.getItem(VALUE_KEY) || '';
// }

// function saveValue(data) {
//     localStorage.setItem(VALUE_KEY, data);
// }

// const handler = function (e) {
//     console.log(e.target.value)
//     saveValue(e.target.value);
// }

// const inp = document.getElementById("inp");

// inp.value = getValue();


// inp.addEventListener("change", handler);