"use strict";
(() => {
	document.querySelector('.js-speaker-form').addEventListener('submit', e => {
		e.preventDefault();

		new FormData(e.currentTarget).forEach((value, name) =>
			console.log(`${name}: ${value}`),
		);

		// e.currentTarget.reset();

	});
})();



document.addEventListener('DOMContentLoaded', () => {
	let validation = new JustValidate('#form',);
	let selector = document.querySelector("input[type='tel']");
	let im = new Inputmask("+38(099)-999-99-99");

	im.mask(selector);

	validation.addField(".js-input-name", [
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
		{
			rule: 'maxLength',
			value: 15,
			errorMessage: "Максимум 15 літер"
		},
	])
		// .addField(".js-input-checkbox", [
		// 	{
		// 		rule: 'required',
		// 		errorMessage: "jhdfjdsdfshh"
		// 	},
		// ])
		.addField('.js-input-phone', [
			{
				rule: 'required',
				errorMessage: "Введіть телефон"
			},
			{
				rule: 'customRegexp',
				value: /^[\s()+-]*([0-9][\s()+-]*){6,20}$/gi,
				errorMessage: "Тільки цифри"
			},
			{
				rule: 'minLength',
				value: 10,
				errorMessage: "Мінімум 10 символів"
			},
			{
				rule: 'maxLength',
				value: 19,
				errorMessage: "Максимум 13 символів"
			},
			{
				validator: (name, value) => {
					let phone = selector.inputmask.unmaskedvalue()
					return Number(phone) && phone.length === 9
				},
				errorMessage: 'Недостаточное количество знаков',
			},
		]).onFail(fields => {

			console.log(fields);
			for (const key in fields) {
				let field = document.querySelector(key);
				field.value = "";
			}
		});
	let submitBtn = document.querySelector('button[type="submit"]');
	let agreeCheckbox = document.querySelector('input[name="check"]');
	validation.addField("#checkbox", [
		{
			rule: 'required',
			errorMessage: "Максимум 13 символів"
		},
	])
	agreeCheckbox.addEventListener('click', function () {
		if (this.checked) {
			submitBtn.disabled = false;
		} else {
			submitBtn.disabled = true;
		}
	});
});
