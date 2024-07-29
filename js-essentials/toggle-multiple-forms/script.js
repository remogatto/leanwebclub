let state = {true: "text", false: "password" };

window.addEventListener('click', function (event) {
    if (event.target.matches('input[type="checkbox"]')) {
	let checkbox = event.target;
	let passwordFields = checkbox.form.querySelectorAll('.password');
	
	for (let field of passwordFields) {
	    field.type=state[checkbox.checked];
	}
    }
});

