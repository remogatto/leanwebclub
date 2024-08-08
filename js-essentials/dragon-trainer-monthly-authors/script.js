let app = document.querySelector('#app');

let endpoints = [
    'https://vanillajsacademy.com/api/dragons.json',
    'https://vanillajsacademy.com/api/dragons-authors.json'
];

let articleTmpl = function (item, authors) {
    return `
<article>
  <h2>${item.title}</h2>
  <em>${item.pubdate}</em>
  <details>
  <summary>by ${item.author}</summary>
  <p>${authors.find(function (author) { return author.author === item.author} ).bio}</p>
  </details>
  <p>${item.article}</p>
</article>
<hr/>
`
}

async function getArticlesAndAuthors() {
    app.innerHTML = 'Fetching all articles and authors...';

    try {
	let responses = await Promise.all(endpoints.map( function (endpoint) { return fetch(endpoint); } ));
	let articlesAndAuthors = await Promise.all(responses.map(async function (response) {
	    if (!response.ok) throw response.status;
	    
	    let data = await response.json();
	    if (!data) throw 'no data';
	    
	    return data
	}));

	let authors = articlesAndAuthors[1].authors;
	app.innerHTML = articlesAndAuthors[0].articles.map(function(item) {
	    return `${articleTmpl(item, authors)}`;
	}).join('');
	
    } catch (error) {
	console.warn(error);
    }
}

getArticlesAndAuthors();

    



    
