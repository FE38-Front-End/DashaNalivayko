

const wContainer = prompt ('Введите ширину контейнера в метрах');
const hContainer = prompt ('Введите высоту контейнера в метрах');
const lContainer = prompt ('Введите длину контейнера в метрах');
const dPipe = prompt ('Введите диметр трубы в метрах');

let containerSquare;
const squareContainer = function (w, h) {
    containerSquare = w*h;
    return containerSquare
}

let pipeSquare;
const squarePipe = function (d) {
    pipeSquare = Math.PI*((dPipe/2)*(dPipe/2));
    return pipeSquare
}

squareContainer (wContainer, hContainer, lContainer);
squarePipe (dPipe);

let metres = Math.floor(containerSquare/pipeSquare);
let pMetres = metres*lContainer;
console.log (pMetres);
