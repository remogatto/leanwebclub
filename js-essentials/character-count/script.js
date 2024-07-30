let counter = document.querySelector("#character-count");
let textarea = document.querySelector('#text');

textarea.addEventListener('input', function (event) {
	counter.innerText = event.target.value.length;
});

