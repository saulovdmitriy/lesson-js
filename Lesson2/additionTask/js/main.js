'use strict';

let week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

for (let i = 0; i < 7; i++) {

    let day = week[i];

    //Если каждый 5 и 6 элемент - выходные, то выделяем жирным
    if(i === 5 || i === 6) {
        day = '<strong>' + day + '</strong>';
    }

    //Если сегодняшний день - это четверг
    if(i === 3) {
        day = '<em>' + day + '</em>';
    }
    document.write(day + '</br>');
}

let arr = [
    '456789',
    '345654',
    '654356',
    '756895',
    '123653',
    '963258',
    '556987'
];

for (let i = 0; i < arr.length; i++) {

    //Если каждый первый элемент массива соответствует 3 или 7
    if (arr[i][0] === '3' || arr[i][0] === '7') {
        console.log(arr[i]);
    }
}
