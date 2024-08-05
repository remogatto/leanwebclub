let blockquote = document.querySelector('blockquote');
let button = document.querySelector('button#get-quote');

function getQuote () {
    blockquote.textContent = 'Getting a fresh quote...';
    
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function (response) {
	if (response.ok) {
	    return response.json();
	}

	throw response.status;
	
    }).then(function (data) {
	blockquote.innerText = data[0];
    }).catch(function (error) {
	console.warn(error);
    });
}

button.addEventListener('click', function (event) {
	getQuote();
});

getQuote();




    
