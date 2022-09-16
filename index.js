let countries = {};

/* -------------------------------------- добавление страны и ее столицы----------------------------------------- */
function EnteringCountry() {
	country = prompt('Введите название страны');
	if (country === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}

	capital = prompt('Введите название столицы!!!');
	if (capital === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}

	countries[country] = capital;
	console.log(countries);
}

let buttonEnteringCountry = document.querySelector('#buttonEnteringCountry');
buttonEnteringCountry.addEventListener('click', EnteringCountry);

/* -------------------------------------- получение информации о стране---------------------------------------- */
let buttonReceivingCountry = document.querySelector('#buttonReceivingCountry');

buttonReceivingCountry.addEventListener('click', function () {
	country = prompt('Введите название страны');
	if (country === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}

	let rezult = (countries[country]) ?
		alert(`Столица: ${country} : ${countries[country]}`) :
		alert(`В базе данных такая страна отсутствует!!!`);
});

/*-------------------------------------- перечень всех стран--------------------------------------------------*/
let buttonListCountry = document.querySelector('#buttonListCountry');

buttonListCountry.addEventListener('click', function () {
	for (let key in countries) {
		console.log(`${key} : ${countries[key]}`);
	}
});

/* -------------------------------------- удаление страны --------------------------------------------------*/

let buttonDeleteCountry = document.querySelector('#buttonDeleteCountry');

buttonDeleteCountry.addEventListener('click', function () {
	country = prompt('Введите название страны');
	if (country === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}

	let rezult = (countries[country]) ?
		delete countries[country] :
		alert('В базе данных такой страны нет либо уже удалена!!!');
	console.log(countries);
});
