let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("YYYY-MM-DD"),
    moneyDay;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    saving: false
};

console.log(appData);


//Первый способ через цикл For

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ((a !== null && a !== undefined && a !== '') && !isNaN(b)){
        console.log("Проверка прошла успешно. Данные записаны в expenses");
        appData.expenses[a] = b;
    } else {
        i--;
    }
};



// //Второй способ через цикл While

// let num = 0;
// while (num < 2) {
//     num++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");

//     if ((a !== null && a !== undefined && a !== '') && !isNaN(b)) {
//         console.log("Проверка прошла успешно. Данные записаны в expenses");
//         appData.expenses[a] = b;
//     } else {
//         num--;
//     }
// };



// //Третий способ через цикл Do While

// let num = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
//     num++;

//     if ((a !== null && a !== undefined && a !== '') && !isNaN(b)) {
//         console.log("Проверка прошла успешно. Данные записаны в expenses");
//         appData.expenses[a] = b;
//     } else {
//         num--;
//     }
// }

// while (num < 2);



//Расчёт бюджета на 1 день
appData.moneyDay = appData.budget / 30;

//Выводим сообщение с количетсвом бюджета на 1 день с точностью до 2 знаков
alert("Бюджет на 1 день: " + (parseInt(appData.moneyDay * 100) / 100) + " руб.");


//Проверяем на уровень достатка
if (appData.moneyDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}