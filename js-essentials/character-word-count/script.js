let charCounter = document.querySelector("#character-count");
let wordCounter = document.querySelector("#word-count");
let textarea = document.querySelector('#text');

textarea.addEventListener('input', function (event) {
    let content = event.target.value;
 
    charCounter.innerText = content.length;
    wordCounter.innerText = content.split(/[\s]+/g).filter(function (word) {
	return word.length;
    }).length;
});

