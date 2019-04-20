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

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("Проверка прошла успешно. Данные записаны в expenses");
        appData.expenses[a] = b;
    } else {
        console.log("Не введена статья расходов. Введите снова!");

        //Запускаю второй цикл уже с первого значения, т.е. на шаг назад
        for (let i = 1; i < 2; i++) {
            
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");

            //Снова делаю проверку
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {          
                appData.expenses[a] = b;
            }
        }
    }
};



// //Второй способ через цикл While

// let num = 0;
// while (num < 2) {
//     num++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Проверка прошла успешно. Данные записаны в expenses");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Не введена статья расходов");

//         //Запускаю второй цикл уже с первого значения, т.е. на шаг назад
//         num = 1;
//         while (num < 2) {
//             num++;

//             let a = prompt("Введите обязательную статью расходов в этом месяце"),
//                 b = prompt("Во сколько обойдется?");

//             //Снова делаю проверку
//             if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//                 appData.expenses[a] = b;
//             }
//         }
//     }
// };



// //Третий способ через цикл Do While

// let num = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
//     num++;

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Проверка прошла успешно. Данные записаны в expenses");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Не введена статья расходов");

//         //Запускаю второй цикл уже с первого значения, т.е. на шаг назад
//         num = 1;
//         do {
//             let a = prompt("Введите обязательную статью расходов в этом месяце"),
//                 b = prompt("Во сколько обойдется?");
//             num++;
        
//             //Снова делаю проверку
//             if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//                 appData.expenses[a] = b;
//             }
//         }
//         while (num < 2);
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



// //Эксперимент с тернарным оператором. Мин. уровень не учитывается

// (appData < 2000) ? (console.log('Средний уровень достатка')) : (console.log('Высокий уровень достатка'));