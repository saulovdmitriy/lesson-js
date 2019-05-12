window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let info = document.querySelector ('.info-header'),
        tab = document.querySelectorAll ('.info-header-tab'),
        tabContent = document.querySelectorAll ('.info-tabcontent');

    function hideContentTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideContentTab(1);

    function showContentTab(b) {
        for (let i = b; i < tabContent.length; i++) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener ('click', (event) => {
        let target = event.target;
        if (target && event.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabContent.length; i++) {
                if (target === tab[i]) {
                    hideContentTab(0);
                    showContentTab(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2019-05-06';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector ('.hours'),
            minutes = timer.querySelector ('.minutes'),
            seconds = timer.querySelector ('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = ("0" + t.hours).slice(-2);
            minutes.textContent  = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);


            if (t.total <= 0) {
                clearInterval(timeInterval);

                let zero = '0' + '0';

                hours.textContent = zero;
                minutes.textContent = zero;
                seconds.textContent = zero;
            }
        }
    }

    setClock('timer', deadline);


    //Modal

    let more = document.querySelector ('.more'),
        overlay = document.querySelector ('.overlay'),
        close = document.querySelector ('.popup-close'),
        descTab = document.querySelectorAll ('.description'),
        descBtn = document.querySelectorAll ('.description-btn');


    function modal(btn) {

        btn.addEventListener('click', function() {

            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

        });

        close.addEventListener('click', function() {

            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';

        });
    }
    modal(more);

    //Добавляю функцию открытия окна на каждую кнопку "Подробнее"
    for (let i = 0; i < descTab.length; i++) {

        modal(descBtn[i]);

    }


    //Modal

    let message = {
        loading: `<img src="img/ajax-loader.gif" class="status__img">`,
        success: `<img src="img/checked.png" class="status__img"><span class="status__message">В ближайшее время мы с вами свяжемся</span>`,
        failure: `<img src="img/warning.png" class="status__img"><span class="status__message">Введите данные снова</span>`
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        

        let myPhone = document.querySelectorAll('input[type="tel"]');

        for (let i = 0; i < myPhone.length; i++) {
            myPhone[i].addEventListener('input',  function() {

                if ( !myPhone[i].oldValue ) {
                    myPhone[i].oldValue = '';
                }
        
                if (/^\+?[()\d \-]*$/.test(myPhone[i].value) || myPhone[i].value === '') {
                    myPhone[i].oldValue = myPhone[i].value;
                } else {
                    myPhone[i].value = myPhone[i].oldValue;
                }
            });
        }


        statusMessage.classList.add('status');

        document.body.addEventListener('submit', (event) => {  // submit - всегда отправка  СРАБАТЫВАЕТ ТОЛЬКО НА ФОРМАХ
            let target = event.target;
            event.preventDefault(); 
            target.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            // request.send(target);
            //Для отправки в формате JSON
            // request.setRequestHeader('Content-Type', 'application/json; charset=utd-8');

            let formData = new FormData(target);

            // Для отправки в формате JSON
            // let obj = {};
            // formData.forEach(function(value, key) {
            //     obj[key] = value;
            // });

            // let json = JSON.stringify(obj);

            // request.send(json);

            request.send(formData);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
        
});

