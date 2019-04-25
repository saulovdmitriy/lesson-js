let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    saving: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyDay = appData.budget / 30;
        alert("Бюджет на 1 день: " + (parseInt(appData.moneyDay * 100) / 100) + " руб.");
    },
    detectLevel: function() {

        if (appData.moneyDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSavings: function() {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/10*percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome.toFixed(2)}`);
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        let items = '';
        while (items === '' || !isNaN(+items) || items === null) {
            items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        }
        items = items.split(',');

        items.forEach((elem, i, arr) => {
            arr[i] = elem.trim();
        });

        items = items.filter(isNotNumeric);
        appData.income = items;
        

        items = prompt('Может что-то ещё?', '');

        items = items.split(',');

        items.forEach((elem, i, arr) => {
            arr[i] = elem.trim();
        });

        items = items.filter(isNotNumeric);
        appData.income.concat(items);
        
        appData.income = appData.income.filter(isNotEmptyParam);
        appData.income.sort();
        
        items = 'Способы доп. заработка: \n';
        appData.income.forEach((elem, i) => items += `${i + 1}. ${elem} \n`);
        document.write(items.replace(/\n/g, '<br>'));
    }
};

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
}
start();

      
appData.chooseIncome();

console.log('В итоге наша программа включает в себя данные:');
for (let i in appData) {
    console.log(i, appData[i]);
} 
      
     
function isEmptyParam(param) {
    if (param === undefined || param === null) {
        return true;
    }
    if (typeof param === "string" && param.length === 0) {
        return true;
    }
    if (typeof param === "object" && Object.keys(param).length === 0) {
        return true;
    }
    return false;
}
    

function isNotEmptyParam(param) {
    return !isEmptyParam(param);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isNotNumeric(n) {
    return !( !isNaN(parseFloat(n)) && isFinite(n) );
}


console.log(appData);