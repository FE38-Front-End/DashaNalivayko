// Задача 1
// В неупорядоченном списке с 10 элементами вывести на консоль текст, 
// находящийся внутри элементов. Список находится в html 
// (список создаёте на своё усмотрение).


let elements = document.querySelectorAll ('li');
for (let elem of elements) {
    console.log(elem.innerHTML);

}


// Задача 2
// Сформировать неупорядоченный список в js с числами от 1 до n, 
// где n вводит пользователь, готовый список вывести в html

// const list = document.insertAdjacentHTML ('beforeend', `<ul id='ul'> Номера: </ul>`);
// const n = prompt("Введите длину списка");
// for (i = 1; i <= n; i++) {
//   const li = document.createElement("li");
//   li.innerHTML = i;
//   list.append(li);
// }

const ul = document.createElement ('ul');
ul.innerHTML = 'Список';
document.body.append(ul);

const n = prompt("Введите длину списка");
for (let i = 1; i <= n; i++) {
  const li = document.createElement('li');
  li.innerHTML = i;
  ul.append(li);
}