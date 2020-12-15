// параметры
const circle = document.querySelector('.circle');
const square = document.querySelector('.square');
const widthSquare = document.querySelector('.widthSquare');
const widthCircle = document.querySelector('.widthCircle');
const step = document.querySelector('.step');
const addWidthSquare = document.querySelector('.addWidthSquare');
const addWidthCircle = document.querySelector('.addWidthCircle');
const addStep = document.querySelector('.addStep');
const clear = document.querySelector('.clear');
const navLeft = document.querySelector('.navigation-left');
const navRight = document.querySelector('.navigation-right');
const navUp = document.querySelector('.navigation-up');
const navDown = document.querySelector('.navigation-down');
const reset = document.querySelector('.reset');


function disabled () {
    navLeft.classList.add('disabled');
    navRight.classList.add('disabled');
    navUp.classList.add('disabled');
    navDown.classList.add('disabled');
    navUp.disabled = true;
    navDown.disabled = true;
    navLeft.disabled = true;
    navRight.disabled = true;
};

function active () {
    navLeft.classList.remove('disabled');
    navRight.classList.remove('disabled');
    navUp.classList.remove('disabled');
    navDown.classList.remove('disabled');
    navUp.disabled = false;
    navDown.disabled = false;
    navLeft.disabled = false;
    navRight.disabled = false;
};

function validation () {
    if (+widthSquare.value && +widthCircle.value && +step.value) {
        active();
    }
}

disabled();
reload();

let b;
let getB = function () {
    b = (+widthSquare.value - +widthCircle.value)/2;
    if (+widthSquare.value < +widthCircle.value) {
        alert('Диаметр круга должен быть меньше стороны квадрата');
        circle.style.visibility = 'hidden';
        square.style.visibility = 'hidden';
        widthCircle.value = "";
        disabled();
    }
}   

addWidthSquare.addEventListener('click', () => {
    square.style.visibility = 'visible';
    if (!+widthSquare.value || null ) {
        alert('Введите число!');
        widthSquare.value = "";
        } else {
            square.style.width = widthSquare.value + 'px';
            square.style.height = widthSquare.value + 'px';
            square.style.border = 'solid 2px darkblue';
            getB();
            localStorage.setItem('valueSquare', widthSquare.value );
        }
    validation ()
});

addWidthCircle.addEventListener('click', () => {
    circle.style.visibility = 'visible';
    if (!+widthCircle.value || null) {
        alert('Введите число!');
        widthCircle.value = "";
        } else {
            circle.style.width = widthCircle.value + 'px';
            circle.style.height = widthCircle.value + 'px';
            getB();
            localStorage.setItem('valueCircle', widthCircle.value );
        }
    validation ()
});

addStep.addEventListener('click', () => {
    if (!+step.value || null) {
        alert('Введите число!');
        step.value = "";
    } else {
        if (+step.value >= b && b > 0) {
            alert('Круг может сделать по одному неполному шагу в каждую сторону');
        }
        localStorage.setItem('valueStep', step.value );
        }
    validation ()
});

clear.addEventListener('click', () => {
    widthSquare.value = "";
    widthCircle.value = "";
    step.value = "";
    circle.style.visibility = 'hidden';
    square.style.visibility = 'hidden';
    disabled();
    localStorage.clear();
});

function reload () {
    widthSquare.value = localStorage.getItem('valueSquare') || '';
    widthCircle.value = localStorage.getItem('valueCircle') || '';
    step.value = localStorage.getItem('valueStep') || '';
};

// навигация
let coordX = 0;
let coordY = 0;

navLeft.addEventListener('click', () => {
    if (coordX > (-b) + +step.value) {
        coordX -= +step.value;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navRight.classList.remove('disabled');
        navRight.disabled = false;
    } else {
        coordX = -b;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        navLeft.classList.add('disabled');
        navLeft.disabled = true;
    }
});

navRight.addEventListener('click', () => {
    if (b - +step.value >= coordX) {
        coordX += +step.value;
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

navUp.addEventListener('click', () => {
    if (coordY > (-b) + +step.value) {
        coordY -= +step.value;
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

navDown.addEventListener('click', () => {
    if (b - +step.value > coordY) {
        coordY += +step.value;
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

reset.addEventListener('click', () => {
    if (+widthSquare.value && +widthCircle.value) {
        coordY = 0;
        coordX = 0;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
        active()
    }
}); 