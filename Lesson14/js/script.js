$(window).ready(function () {
    
    $('.main_btna');//Выбрать тур
    $('.main_btn');//Получить консультацию
    $('.modal');//Модальное окно
    $('.close');//Кнопка закрытия мод. окна
    $('.back');//Вернуться на сайт
    $('.overlay');//Оверлей мод. окна
    $('a[href="#sheldure"]');//Пункт меню Расписание туров    
    $('.thanks');//Окно благодарности

    //Выношу модальное окно за верхнюю границу окна браузера
    $('.modal').css('marginTop', '-50rem');

    function showModal() {
        $('.modal').animate({marginTop: '5rem', borderRadius: '15px'}, 500).show();
        $('.overlay').fadeIn(500);
    }

    function hideModal() {
        $('.modal').animate({marginTop: '-50rem'});
        $('.overlay').fadeOut(500);
    }

    $('.main_btna').on('click', showModal);

    $('.main_btn').on('click', showModal);

    $('a[href="#sheldure"]').on('click', showModal);

    $('.close').on('click', hideModal);

    $('.back').on('click', function() {
        $('.thanks').fadeOut(500);
    });
    

       //Отправка даных формы на сервер
       $('.form-inline').on('submit', (event) => {
        let target = event.target;
        event.preventDefault(); 

        let formData = new FormData(target);

        formData = JSON.stringify(formData);

        // $.ajax({
        //     type: "POST",
        //     url: "server.php",
        //     data: formData,
        //     dataType: 'json',
        //     contentType: 'application/json; charset=utf-8',
        //     success: function() {
        //         hideModal();
        //         $('.thanks').show();
        //     },
        //     error: function() {
        //         hideModal();
        //         $('.thanks p').html('Что-то пошло не так...<br>Попробуйте ещё раз!');
        //     }
        // });


        function postSuccess() {
            hideModal();
            $('.thanks').show();
        }

        $.post('server.php', formData, postSuccess(), 'json');
    });

});