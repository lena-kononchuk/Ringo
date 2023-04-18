"use strict";
(() => {
	document.querySelector('.js-speaker-form').addEventListener('submit', e => {
		e.preventDefault();

		new FormData(e.currentTarget).forEach((value, name) => {
			//console.log(`${name}: ${value}`);
		}
		);

		// e.currentTarget.reset();

	});
})();

document.addEventListener('DOMContentLoaded', () => {
	// const validation = new JustValidate('.js-speaker-form');

	// create error/validation
	// Получаем все формы на странице
	const forms = document.querySelectorAll('.form');


	// Проходимся по каждой форме и создаем экземпляр JustValidate для каждой из них
	for (const form of forms) {
		const formValidator = new JustValidate(`form#${form.id}`);
		// Inputmask code
		let selector = document.querySelectorAll("input[type='tel']");
		let im = new Inputmask("+38(099)-999-99-99");
		im.mask(selector);

		// Добавляем правила валидации для каждой формы
		formValidator.addField(".js-input-name", [
			{
				rule: 'required',
				errorMessage: "Введіть ім'я"
			},
			{
				rule: 'customRegexp',
				value: /^[a-zA-Zа-яА-Я]+$/gi,
				errorMessage: "Мають бути тільки букви"
			},
			{
				rule: 'minLength',
				value: 3,
				errorMessage: "Мінімум 3 літери"
			},
		]).addField('.js-input-checkbox', [
			{
				rule: 'required',
				errorMessage: "Підтвердіть згоду на обробку даних",
				rules: {
					myCheckbox: {
						checked: true
					}
				},
			},
		]).addField('.js-input-phone', [
			{
				rule: 'required',
				errorMessage: "Введіть телефон"
			},
		]).onFail(fields => {
			for (const key in fields) {
				let field = document.querySelectorAll(key);
				field.value = "";

				// const submitButtons = document.querySelectorAll('button[type="submit"]');
				// submitButtons.forEach(button => {
				// 	button.addEventListener('click', formSend);
				// 	async function formSend(e) {
				// 		// e.preventDefault();
				// 		alert("успішно відправлена форма");
				// 	}
				// });
			}
		});
	}
});


