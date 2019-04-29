"use strict";

let budgetValue = document.querySelector ('.budget-value'),
    dayBudgetValue = document.querySelector ('.daybudget-value'),
    levelValue = document.querySelector ('.level-value'),
    expensesValue = document.querySelector ('.expenses-value'),
    optionalExpensesValue = document.querySelector ('.optionalexpenses-value'),
    incomeValue = document.querySelector ('.income-value'),
    monthSavingsValue = document.querySelector ('.monthsavings-value'),
    yearSavingsValue = document.querySelector ('.yearsavings-value'),

    //Обязательные расходы
    expensesItem = document.querySelectorAll ('.expenses-item'),

    //Кнопки утвердить и рассчитать
    expensesBtn = document.getElementsByTagName ('button')[0],
    optionalExpensesBtn = document.getElementsByTagName ('button')[1],
    countBtn = document.getElementsByTagName ('button')[2],
    startBtn = document.getElementById ('start'),

    //Необязательные расходы
    optionalExpensesItem = document.querySelectorAll ('.optionalexpenses-item'),

    //Статьи возможного дохода
    chooseIncome = document.querySelector ('#income'),

    //Накопления
    checkSavings = document.querySelector ('#savings'),

    //Сумма
    sumValue = document.querySelector ('#sum'),

    //Процент
    percentValue = document.querySelector ('#percent'),

    //Год, месяц, день
    yearValue = document.querySelector ('.year-value'),
    monthValue = document.querySelector ('.month-value'),
    dayValue = document.querySelector ('.day-value');


let money, time;


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    saving: false
};

startBtn.addEventListener ('click', function() {

    time = prompt("YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener ('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((a !== null && a !== undefined && a !== '' && a.length < 50) && !isNaN(b) && b !== null && b !== '' && b !== undefined && b.length < 50){
            console.log("Проверка прошла успешно. Данные записаны в expenses");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener ('click', function() {

    for (let i = 0; i < optionalExpensesItem.length; i++) {

    let a = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener ('click', function() {

    if (appData.budget != undefined) {
        let allExpenses = 0;
        for (let i in appData.expenses) {
            allExpenses += appData.expenses[i];
        }
        appData.moneyDay = ((appData.budget - allExpenses) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyDay;

        if (appData.moneyDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener ('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener ('click', function() {
    
    if (appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }

});

sumValue.addEventListener ('input', function() {
    if (appData.saving == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        yearValue.textContent = appData.yearIncome.toFixed(1);
        monthValue.textContent = appData.monthIncome.toFixed(1);
    }
});

percentValue.addEventListener ('input', function() {
    if (appData.saving == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});


let allBtns = document.getElementsByTagName ('button');

for (let i = 0; i < allBtns.length - 1; i++) {
    allBtns[i].disabled = true;
    allBtns[i].style.backgroundImage = 'none';
}

// назначаем отслеживание изменений на все инпуты обязательных расходов
for (let i = 0; i<expensesItem.length; i++){
    if(i % 2 === 0){ // для чётных (названия расходов)
        expensesItem[i].addEventListener('input', function() {
        let isExpensesFull = true;
        
        // блокирую кнопку рассчитать пока не утвердим новые расходы
        startBtn.disabled = 'disabled';
        startBtn.style.backgroundImage = 'none';
    
        // проверяю чтобы все поля были заполнены
        for (let j = 0; j < expensesItem.length; j++){
          if (expensesItem[j].value === ''){
            isExpensesFull = false;
            break;
          }
        }
    
        // если все поля заполнены и запустили "начать расчёт" то разблокируем кнопку утвердить расходы
        if(isExpensesFull && appData.budget > 0){
            expensesBtn.removeAttribute('disabled');
            expensesBtn.style.backgroundImage = '';
        } else {
            expensesBtn.disabled = 'disabled';
            expensesBtn.style.backgroundImage = 'none';
        }
    });
    
    } else { // для нечётных (суммы расходов)
        expensesItem[i].addEventListener('input', function() {
            if ( !expensesItem[i].oldValue ) {
                expensesItem[i].oldValue = '';
            }
            let isExpensesFull = true;
        
            // блокируем кнопку рассчитать пока не утвердим новые расходы
            startBtn.disabled = 'disabled';
            startBtn.style.backgroundImage = 'none';
            
            // если некорректный ввод для поля, то восстанавливаем предыдущее значение
            if ( /^\d+$/.test(expensesItem[i].value) || expensesItem[i].value === '') {
                expensesItem[i].oldValue = expensesItem[i].value;
            } else {
                expensesItem[i].value = expensesItem[i].oldValue;
            }
            
            // проверяем чтоб все поля были заполнены
            for (let j = 0; j < expensesItem.length; j++){
                if (expensesItem[j].value === ''){
                    isExpensesFull = false;
                }
            }
            
            // если все поля заполнены и запустили "начать расчёт" то разблокируем кнопку утвердить расходы
            if (isExpensesFull && appData.budget > 0){
                expensesBtn.removeAttribute('disabled');
                expensesBtn.style.backgroundImage = '';

                count();
            } else {
                expensesBtn.disabled = 'disabled';
                expensesBtn.style.backgroundImage = 'none';
            }
        });
    }
}

// назначаем обработчик на изменение каждого поля необязательных расходов
for (let i = 0; i<optionalExpensesItem.length; i++){
    optionalExpensesItem[i].addEventListener('input', function() {

    if ( !optionalExpensesItem[i].oldValue ) {
        optionalExpensesItem[i].oldValue = '';
    }
    
        // в поле "необязательные расходы" можно использовать только русские буквы
        // если некорректный ввод для поля, то восстанавливаем предыдущее значение
        if ( /^[А-Яа-яЁё_\-\ ]+$/.test(optionalExpensesItem[i].value) || optionalExpensesItem[i].value === '' ) {
        optionalExpensesItem[i].oldValue = optionalExpensesItem[i].value;
        } else {
        optionalExpensesItem[i].value = optionalExpensesItem[i].oldValue;
        }
        
        // активируем кнопку утверждения расходов только если запустили "начать расчёт"
        if (appData.budget > 0) {
            optionalExpensesBtn.removeAttribute('disabled');
            optionalExpensesBtn.style.backgroundImage = '';
        }
    });
}

//функция для снятия блокировки кнопки
function count() {
    countBtn.removeAttribute('disabled');
    countBtn.style.backgroundImage = '';
}