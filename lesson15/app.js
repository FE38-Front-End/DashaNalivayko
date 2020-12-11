// Задание1!
// Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10),
// количество квартир на лестничной площадке (1-20). Скрипт запрашивает эти показатели и номер квартиры. 
// Выводится номер подъезда и этажа, в котором находится указанная квартира.


const floors = prompt ('введите кол-во этажей', '')
if (floors >= 1 & floors <= 25) {
    const porches = prompt ('введите кол-во подъездов', '');
    if (porches >= 1 & porches <= 10) {
        const flatsPerFloor = prompt ('введите кол-во квартир на лестничной площадке', '');
        if (flatsPerFloor >= 1 & flatsPerFloor <= 20) {
            const flatNumber = prompt ('введите номер квартиры', '');
            if (floors*porches*flatsPerFloor < flatNumber ||  flatNumber == 0) {
                alert('Такого номера квартиры в доме не существует');
            } else  {
                const porch = Math.ceil(flatNumber/(flatsPerFloor*floors));
                const floor = Math.ceil(((flatNumber/flatsPerFloor/porches) - (porch-1)) * (flatsPerFloor*floors)/ flatsPerFloor);
                alert(`этаж: ${floor}, подъезд: ${porch}`);

                // еще можно просто перебирать с помощью цикла:

                // var seek = 1;
                // for (var i=1; i <=porches; i++){
                //     for (var j=1; j <= floors; j++){
                //         for(var k=1; k <= flatsPerFloor; k++){
                //             if (seek++==flatNumber) {
                //                 alert(`этаж: ${j}, подъезд: ${i}`);
                //                 break;
                //             }
                //         }
                //     }
                // }
            } 
        } else alert('Диапазон кол-ва квартир на лестничной площадке 1-20')
    } else alert('Диапазон кол-ва подъездов 1-10')
} else alert('Диапазон кол-ва этажей 1-25')


// Задание 2!
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {  John: 100,  Ann: 160,  Pete: 130 }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

const salaries = {  John: 100,  Ann: 160,  Pete: 130 };
let sum = 0;

for (var key in salaries) {
    sum = sum + salaries[key];
}

console.log (sum); 