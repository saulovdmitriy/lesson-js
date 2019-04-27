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
    optionalexpensesItem = document.querySelectorAll ('.optionalexpenses-item'),

    //Статьи возможного дохода
    chooseIncome = document.querySelector ('#income'),

    //Накопления
    savings = document.querySelector ('#savings'),

    //Сумма
    sum = document.querySelector ('#sum'),

    //Процент
    percent = document.querySelector ('#percent'),

    //Год, месяц, день
    yearValue = document.querySelector ('.year-value'),
    monthValue = document.querySelector ('.month-value'),
    dayValue = document.querySelector ('.day-value');


    console.log(budgetValue);
    console.log(dayBudgetValue);
    console.log(levelValue);
    console.log(expensesValue);
    console.log(optionalExpensesValue);
    console.log(incomeValue);
    console.log(monthSavingsValue);
    console.log(yearSavingsValue);

    console.log(expensesItem);

    console.log(expensesBtn);
    console.log(optionalExpensesBtn);
    console.log(countBtn);
    console.log(startBtn);

    console.log(optionalexpensesItem);
    console.log(chooseIncome);
    console.log(savings);
    console.log(sum);
    console.log(percent);

    console.log(yearValue);
    console.log(monthValue);
    console.log(dayValue);