let selector = '#save-me input, #save-me textarea';
let form = document.querySelector('form#save-me');
let formElements = document.querySelectorAll(selector);
let prefix='autosave_';
let entryName = prefix+form.id;
let entry = JSON.parse(localStorage.getItem(entryName)) || {};
let debounce;

// Show a status message
function showStatus () {
    let currentNotification = document.querySelector('#notification');

    if (currentNotification) return;
    
    // Create a notification
    let notification = document.createElement('div');

    notification.setAttribute('aria-live', 'polite');
    notification.setAttribute('id', 'notification');
    
    // Inject it into the DOM
    form.append(notification);

    // Add text after it's in the UI
    setTimeout(function () {
	notification.innerHTML = '<p>The form was autosaved!</p>';
    }, 1);

    // Remove it after 4 seconds
    setTimeout(function () {
	notification.remove();
    }, 3000);
}

window.addEventListener('input', function (event) {
    if (event.target.matches(selector)) {

	clearTimeout(debounce);

	debounce = setTimeout(function () {
	    entry[event.target.id] = event.target.value; 
	    localStorage.setItem(entryName, JSON.stringify(entry));
	    showStatus();
	}, 3000);
    }
});

form.addEventListener('submit', function () {
    localStorage.removeItem(entryName);
});

formElements.forEach( function (element) {
    let value = entry[element.id];
    
    if (value != null) element.value = value;
});
