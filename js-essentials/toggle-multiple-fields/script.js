let passwordFields = document.querySelectorAll('input[type="password"]');
let show = document.querySelector('input[type="checkbox"]');
let state = {true: "text", false: "password" };


show.addEventListener('click', function (event) {
    for (let field of passwordFields) {
	field.type=state[event.target.checked];
    }
});

