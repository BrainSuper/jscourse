"use strict";
// Кнопка "Начать расчет" 
let start = document.getElementById("start"),
// Правая часть программы
    budget = document.querySelector(".budget-value"),
    dayBudget = document.querySelector(".daybudget-value"),
    level = document.querySelector(".level-value"),
    expenses = document.querySelector(".expenses-value"),
    optionalExpenses = document.querySelector(".optionalexpenses-value"),
    income = document.querySelector(".income-value"),
    monthSavings = document.querySelector(".monthsavings-value"),
    yearSavings = document.querySelector(".yearsavings-value"),
    //Все поля с обязательными расходами 
    expensesItem = document.querySelectorAll(".expenses-item"),
    // Получаем блок с кнопками для утверждения и расчета
    data = document.querySelector(".data"),
    //Все Кнопки утверждения и расчета 
    btn = data.getElementsByTagName('button'),
    // Кнопка утверждения обязательных расходов
    expensesBtn = btn[0],
    // Кнопка утверждения необязательных расходов
    optionalExpensesBtn = btn[1],
    // Кнопка "Расчитать"
    countBtn = btn[2],
    // Поля для ввода необязательных расходов
    optionalExpensesInputs = document.querySelectorAll(".optionalexpenses-item"),
    // Поле для статьи возможного дохода
    chooseIncomeInput = document.querySelector(".choose-income"),
    // Чекбокс
    checkbox = document.querySelector(".checksavings input"),
    // Сумма 
    sumInput = document.querySelector(".choose-sum"),
    // Процент
    percentInput = document.querySelector(".hoose-percent"),
    // Год
    yearInput = document.querySelector(".year-value"),
    // Месяц
    monthInput = document.querySelector(".month-value"),
    // День
    dayInput = document.querySelector(".day-value");
    console.log(btn);

