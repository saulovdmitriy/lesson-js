let body = document.querySelector ('body'),
    menu = document.querySelector ('.menu'),
    menuItem = document.getElementsByClassName ('menu-item'),
    title = document.getElementById ('title'),
    adv = document.querySelector ('.adv'),
    promptApple = document.getElementById ('prompt');


//Меняю местами пункты меню
menu.insertBefore(menuItem[2], menuItem[1]);

//Добавляю пятый элемент
let menuItemNew = document.createElement ('li');
menuItemNew.textContent = 'Пятый пункт';
menuItemNew.classList.add('menu-item');
menu.appendChild(menuItemNew);

//Меняю картинку
body.style.background = "url(../first_dz/img/apple_true.jpg) center no-repeat";

//Меняю заголовок на новый
title.textContent = "Мы продаем только подлинную технику Apple";

//Удаляю рекламу
adv.parentNode.removeChild(adv);

//Задаю вопрос пользхователю
//Я сделал функцию или лучше нужно было делать обычным циклом?
function appleAsk() {
    let promptValue = prompt('Как вы относитесь к технике Apple?');

    if(promptValue !== null && promptValue !== undefined && promptValue !== '' && promptValue) {
        promptApple.textContent = promptValue;
    } else {
        appleAsk();
    }
}
appleAsk();