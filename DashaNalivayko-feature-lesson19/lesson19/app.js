const createList = document.querySelector('.createList');
let ul;
let createListClick = function (event) {
    if (ul) {
        alert ('список уже создан','')
    } else {
        ul = document.createElement('ul');
        document.body.append(ul);
        ul.innerHTML = '<b>Список</b>';
    }
}
createList.addEventListener('click', createListClick);



const addElement = document.querySelector('.addElement');
let addElementClick = function (event) {
    if (ul) {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        ul.append(li);
        li.innerHTML = new Date().toLocaleString();
    } else {
        alert('Нельзя создать элемент, тк не создан список')
    }
}
addElement.addEventListener('click', addElementClick);



const delElement = document.querySelector('.delElement');
let delElementClick = function (event) {
    const li = document.querySelectorAll('li');
    if (li.length === 0) {
        alert('Список пуст');
    } else {
        li[li.length-1].remove();
    }
}

delElement.addEventListener('click', delElementClick);