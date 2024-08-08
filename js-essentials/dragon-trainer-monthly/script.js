let app = document.querySelector('#app');
let endpoint = 'https://vanillajsacademy.com/api/dragons.json';

async function getArticles() {
    app.innerHTML = 'Fetching articles...';
    
    try {
	let response = await fetch(endpoint);    
	if (!response.ok) throw response.status;

	let dragons = await response.json();
	if (!dragons) throw 'no data';

	app.innerHTML = dragons.articles.map(function(item) {
	    return `
<h2>${item.title}</h2>
<cite>${item.pubdate} by <strong>${item.author}</strong></cite>
<p>${item.article}</p>
<hr/>
`
	}).join('');
	
    } catch (error) {
	console.warn(error);
    }
}

getArticles();

    



    
