'use strict';

//Первый способ решения

let num = '33721';

num = num.split('');
let result = num[0];

for (let i = 1; i < num.length; i++){
    result *= num[i];
}
console.log(result);

result = result**3;
console.log(result);

//Выводим только 2 первых цифры
alert( result.toString().slice(0,2) );


// Второй способ решения

// let num = '33721';

// let result = num[0] * num[1] * num[2] * num[3] * num[4];

// result = result**3;
// console.log(result);

// alert( result.toString().slice(0,2) );