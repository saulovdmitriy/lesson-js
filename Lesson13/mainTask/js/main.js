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

    let deadline = '2019-05-15';

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
        statusMessage = document.createElement('div'),
        myPhone = document.querySelectorAll('input[type="tel"]');

    for (let i = 0; i < myPhone.length; i++) {
        myPhone[i].addEventListener('input',  function() {
    
            if (/^\+?[()\d \-]*$/.test(myPhone[i].value) || myPhone[i].value === '') {
                myPhone[i].oldValue = myPhone[i].value;
            } else {
                myPhone[i].value = '';
            }
        });
    }

    statusMessage.classList.add('status');

    document.body.addEventListener('submit', (event) => {
        let target = event.target;
        event.preventDefault(); 
        target.appendChild(statusMessage);

        let formData = new FormData(target);

        function postData(data) {

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');
                
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                request.onreadystatechange = function() {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readystate === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };
                
                request.send(data);
            });
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => {statusMessage.innerHTML = message.loading})
            .then(() => {statusMessage.innerHTML = message.success;})
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    
    });


    //Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots. forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
    

    //Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;


        persons.addEventListener('input', function() {

            validInput(persons);  

            personsSum = +this.value;

            if(personsSum > 0 && daysSum > 0) {
                total = daysSum * personsSum * 4000;
                totalValue.innerHTML = total;
            } else {
                totalValue.innerHTML = 0;
            }
        });

        restDays.addEventListener('input', function() {

            validInput(restDays);

            daysSum = +this.value;

            if(personsSum > 0 && daysSum > 0) {
                total = daysSum * personsSum * 4000;
                totalValue.innerHTML = total;
            } else {
                totalValue.innerHTML = 0;
            }
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });


        function validInput(elem) {
            elem.addEventListener("input", function() {
                let i = 0,
                    val = this.value.replace(/\D/g, "");

                this.value = val.replace(/./g, function(a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
                });
            });
        }

            
});