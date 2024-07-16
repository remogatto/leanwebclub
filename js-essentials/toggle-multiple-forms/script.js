let passwordFields = document.querySelectorAll('input[type="password"]');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let state = {true: "text", false: "password" };

window.addEventListener('click', function (event) {
    if (event.target.matches('#show-password')) {
	for (let field of passwordFields) {
	    field.type=state[event.target.checked];
	}
    }
    else {
	console.log("Show passwords toggle");
	for (let field of passwordFields) {
	    field.type=state[event.target.checked];	    
	}
    }

});

