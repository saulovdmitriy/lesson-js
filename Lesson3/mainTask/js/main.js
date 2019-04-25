let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    saving: true
};

function srart() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
}
srart();

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
    
        if ((a !== null && a !== undefined && a !== '' && a.length < 50) && !isNaN(b) && b !== null && b !== '' && b !== undefined && b.length < 50){
            console.log("Проверка прошла успешно. Данные записаны в expenses");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyDay = appData.budget / 30;
    alert("Бюджет на 1 день: " + (parseInt(appData.moneyDay * 100) / 100) + " руб.");
}
detectDayBudget();

function detectLevel() {

    if (appData.moneyDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка")
    }
}
detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/10*percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome.toFixed(2)}`);
    }
}
checkSavings();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", '');
    
        if (a === null || a === "" || !isNaN(a)){
            i--;
            alert("Введите название необязательных расходов");
            continue;
        }
        console.log("Проверка прошла успешно. Данные записаны в optionalExpenses");
        appData.optionalExpenses[i+1] = a;
 
    }
}
chooseOptExpenses();
console.log(appData);