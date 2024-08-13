let selector = '#save-me input, #save-me textarea';
let form = document.querySelector('form#save-me');
let formElements = document.querySelectorAll(selector);
let prefix='autosave_';
let entryName = prefix+form.id;
let entry = JSON.parse(localStorage.getItem(entryName)) || {};

window.addEventListener('input', function (event) {
    if (event.target.matches(selector)) {
	entry[event.target.id] = event.target.value; 
	localStorage.setItem(entryName, JSON.stringify(entry));
    }
});

form.addEventListener('submit', function () {
    localStorage.removeItem(entryName);
});

formElements.forEach( function (element) {
    let value = entry[element.id];
    
    if (value != null) element.value = value;
});
