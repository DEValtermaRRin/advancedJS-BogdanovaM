const elemForm = document.querySelector(".form");
const elemsInput = document.querySelectorAll(".form__control");
const inputName = document.getElementById("name");
const inputTel = document.getElementById("tel");
const inputEmail = document.getElementById("email");
const inputText = document.getElementById("text");
const errorMes = document.querySelector(".error-message");
const patternName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/iu;
const patternTel = /^\+[0-9]\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/;
const patternEmail = /^[\w-_\.]+@[\w-]+\.[a-z]{2,4}$/;
const patternText = /([<>$~`\[\]]+)/gm;
elemForm.addEventListener("submit", () => {
	elemsInput.forEach(el => el.classList.remove('error'));
  errorMes.textContent = "";
  elemsInput.forEach((el) => {
    if (el.value === "") {
      el.classList.add("error");
      errorMes.insertAdjacentHTML(
        "afterbegin",
        `Поле ${el.closest("label").textContent} не заполнено! <br>`
      );
    }
  });	
	checkInvalidSigns(inputText, patternText);
	сheckСorrectInput(inputName, patternName);
	сheckСorrectInput(inputTel, patternTel);
	сheckСorrectInput(inputEmail, patternEmail);
});

function сheckСorrectInput(input, pattern) {
	if (!pattern.test(input.value)) {
		input.classList.add('error');
		errorMes
		.insertAdjacentHTML('beforeend', `Поле ${input.closest('label').textContent} заполнено неверно! <br>`);
	}
}

function checkInvalidSigns(input, pattern) {
	if (pattern.test(input.value)) {
		input.classList.add('error');
		errorMes
		.insertAdjacentHTML('beforeend', `Недопустимые символы в поле Сообщение: <br>`);
	}
}

