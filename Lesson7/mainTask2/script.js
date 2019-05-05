window.addEventListener ('DOMContentLoaded', function() {

    'user strict';
    let hours = document.querySelector ('.timer__hours'),
        minutes = document.querySelector ('.timer__minutes'),
        seconds = document.querySelector ('.timer__seconds');

    
    let timerId  = setInterval(function() {
        let timer = new Date();
        let tmp = [timer.getHours().toString(), timer.getMinutes().toString(), timer.getSeconds().toString()];
    
        for (let i = 0; i < 3; i++){
            if (tmp[i].length === 1){
                tmp[i] = '0' + tmp[i];
            }
        }

        hours.textContent = tmp[0];
        minutes.textContent = tmp[1];
        seconds.textContent = tmp[2];
    
    }, 1000);
    
    console.log(timerId);
});