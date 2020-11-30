

const wContainer = prompt ('Введите ширину контейнера в метрах','');
const hContainer = prompt ('Введите высоту контейнера в метрах','');
const lContainer = prompt ('Введите длину контейнера в метрах','');
const dPipe = prompt ('Введите диметр трубы в метрах','');
// const dPipe2 = prompt ('Введите диметр второй трубы в метрах');



const squareContainer = function (w, h) {
    return w*h
}


const squarePipe = function (dPipe) {
    return Math.PI*Math.pow(dPipe/2,2);
}

function calculator (wContainer, hContainer, lContainer, dPipe) {
    const pipeSquare = squarePipe(dPipe);
    const containerSquare = squareContainer(wContainer, hContainer);
    let quantity = Math.floor(containerSquare/pipeSquare);
    let pMetres = quantity*lContainer;
return pMetres
}

console.log (calculator(wContainer, hContainer, lContainer, dPipe))