// Задание 3! 

// Функция sequence(start, step) при вызове возвращает функцию-генератор. 
// Каждый вызов генератора возвращает новое число в
// числовой последовательности. start – стартовое число (по умолчанию 0). 
// step – шаг приращения (по умолчанию 1). Пример работы:

// var generator = sequence(10, 3);
// alert(generator()); // 10
// alert(generator()); // 13
// alert(generator()); // 16


function sequence(start = 0, step = 1) {
    return function () {
        let start1 = start;
        start += step;
        return start1;
    };
}

let generator = sequence(10, 3);

alert(generator()); //10
alert(generator()); //13
alert(generator()); //16

// Задание 4! 

// Создайте функцию sum, которая будет возвращать сумму любого количества чисел. 
// Вызываться функция должна вот так (обратите внимание на скобки):

// x = sum(2)(5)(10);
// alert(x); // выводит 17

