const MAX_QUOTES = 50;
const endpoint = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let blockquote = document.querySelector('blockquote');
let button = document.querySelector('button#get-quote');
let lastQuotes = [];

async function getQuote () {
    blockquote.textContent = `Getting a fresh quote avoiding duplicates...`;

    try {
	let response = await fetch(endpoint)
	if (!response.ok) throw response.status;

	let data = await response.json();
	if (!data) throw 'No data';
	
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
    } catch (error) {
	console.warn(error);
    }
}

button.addEventListener('click', function (event) {
    getQuote();
});

getQuote();





