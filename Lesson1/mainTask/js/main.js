let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("YYYY-MM-DD"),

    //Спрашиваем первый раз про статью расходов
    expenseItem = prompt("Введите обязательную статью расходов в этом месяце"),
    expensePrice = +prompt("Во сколько обойдется?"),
    
    moneyDay;

console.log(money);
console.log(time);

let appData = {
    money: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [
    
    ],
    characters: {

    }
};

console.log(appData);


//Записываем ключ: значение в expense
appData.expenses[expenseItem] = expensePrice;


// Спрашиваем второй раз про статью расходов
expenseItem = prompt("Введите обязательную статью расходов в этом месяце"),
expensePrice = +prompt("Во сколько обойдется?");

//Дописываем новые данные ключ: значение в expense
appData.expenses[expenseItem] = expensePrice;


//Добавляем свойство savings объекту appData
let savings = 'savings';

appData.characters[savings] = false;

//Расчёт бюджета на 1 день
moneyDay = money/30;

//Выводим сообщение с количетсвом бюджета на 1 день с точностью до 2 знаков
alert("Бюджет на 1 день: " + (parseInt(moneyDay * 100) / 100) + " руб.");



