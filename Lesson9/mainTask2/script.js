let age = document.getElementById('age');

let user = {

    value: age.value
    
};

function showUser(surname, name) {

    age.addEventListener ('change', function() {

        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);

    });

}

showUser('Иванов', 'Иван');
 