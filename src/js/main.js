let startBtn = document.getElementById("start"), //получил кнопку через id
//получим все элементы формочки через классы
    budVal = document.querySelector('.budget-value'), //input для доходов
    dayBudVal = document.querySelector('.daybudget-value'),//input для бюджет на 1 день
    levelVal = document.querySelector('.level-value'), //уровень дохода
    expVal = document.querySelector('.expenses-value'),//обязательные расходы
    optVal = document.querySelector('.optionalexpenses-value'),//возможные траты
    incVal = document.querySelector('.income-value'),//дополнительный доход
    monthSaves = document.querySelector('.monthsavings-value'),//накопления на месяц
    yearSavings = document.querySelector('.yearsavings-value'),//накопления за год
//получим поля input обязаельных расходов через классы
    expItem = document.querySelectorAll('.expenses-item'),
//получим кнопки Утвердить и Рассчитать через Tag
    btnArr = document.getElementsByTagName ('button'); //получил массив кнопок
    confirm1Btn = btnArr[0]; //первая кнопка утвердить = первый элемент массива
    confirm2Btn = btnArr[1]; //вторая кнопка утвердить = второй элемент массива
    calcBtn = btnArr[2];//кнопка рассчитать = третий элемент массива
//получим поля для ввода необязательных расходов через клас
let inputArr = document.querySelectorAll('.optionalexpenses-item');