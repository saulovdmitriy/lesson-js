let age = document.getElementById('age');

function showUser(surname, name) {

    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);

}
//С помощью apply
// showUser.apply(age, ['Иванов', 'Иван']);

//С помощью bind
let a = showUser.bind(age);

a('Иванов ', 'Иван');
