const btn = document.querySelector('.input__submit-btn');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('.error');
const errorImg = document.querySelector('.input__error-img');

const checkMail = () => {
	const reg =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (reg.test(email.value)) {
		errorImg.style.display = 'none';
		errorMsg.style.visibility = 'hidden';
		email.style.border = '';
	} else {
		errorImg.style.display = 'block';
		errorMsg.style.visibility = 'visible';
		email.style.border = '1px solid hsl(0, 93%, 68%)';
	}
};

btn.addEventListener('click', checkMail);
