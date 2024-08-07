const MAX_QUOTES = 50;

let blockquote = document.querySelector('blockquote');
let button = document.querySelector('button#get-quote');
let lastQuotes = [];

function getQuote () {
    blockquote.textContent = `Getting a fresh quote avoiding duplicates...`;
    
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function (response) {
	if (response.ok) {
	    return response.json();
	}

	throw response.status;
	
    }).then(function (data) {
	console.log(`Last quotes in array: ${lastQuotes.length}`);
	
	if ( lastQuotes.length > MAX_QUOTES - 1 ) {
	    lastQuotes.shift();
	}
	
	let quote = data[0];
	
	if ( !lastQuotes.includes(quote) ) {
	    blockquote.innerText = quote;
	    lastQuotes.push(quote);
	} else {
	    console.log('Hit a dup! Re-fetching...', quote);
	    getQuote();
	    return;
	}
    }).catch(function (error) {
	console.warn(error);
    });
}

button.addEventListener('click', function (event) {
    getQuote();
});

getQuote();





