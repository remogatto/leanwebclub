let selector = '#save-me input, #save-me textarea';
let form = document.querySelector('form#save-me');
let formElements = document.querySelectorAll(selector);
let prefix='autosave_';

window.addEventListener('input', function (event) {
    if (event.target.matches(selector)) 	
	localStorage.setItem(prefix+event.target.id, event.target.value);
});

form.addEventListener('submit', function (event) {
    formElements.forEach( function (element) {
	localStorage.removeItem(prefix+element.id);
    });
});

formElements.forEach( function (element) {
    let value = localStorage.getItem(prefix+element.id);
    
    if (value != null) element.value = value;
});
