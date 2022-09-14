let buttonEntering = document.querySelector('.countries__country-entering_button');
let buttonReeciving = document.querySelector('.countries__country-receiving_button');
let buttonList = document.querySelector('.countries__country-list_button');
let buttonDelete = document.querySelector('.countries__country-delete_button');

/* -------------------------------------- добавление страны и ее столицы----------------------------------------- */
buttonEntering.onclick = () => {
	nameCountry = prompt('Введите название страны');
	if (nameCountry === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}
	nameCapital = prompt('Введите название столицы!!!');
	if (nameCapital === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}

	countries = {
		country: nameCountry,
		capital: nameCapital
	};
	console.log(countries);
};

/* -------------------------------------- получение информации о стране---------------------------------------- */
buttonReeciving.onclick = () => {
	nameCountry = prompt('Введите название страны');
	if (nameCountry === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}

	if (nameCountry === countries.country) {
		alert('Столица' + ': ' + nameCapital);
	} else {
		alert('нет инфо по стране');
	}
};

/*-------------------------------------- перечень всех стран--------------------------------------------------*/
buttonList.onclick = () => {
	for (let key in countries) {
		console.log(key + ': ' + countries[key]);
	}
	console.log(countries);
};

/* -------------------------------------- удаление страны --------------------------------------------------*/
buttonDelete.onclick = () => {
	nameCountry = prompt('Введите название страны');
	if (nameCountry === '') {
		alert(`Поле не должно быть пустым!!!`);
		return;
	}

	if (nameCountry === countries.country) {
		delete countries.country;
		for (let key in countries) {
			console.log(key + ': ' + countries[key]);
		}
	} else {
		alert('В базе данных такой страны нет либо уже удалена.')
	}
};