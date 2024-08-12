let app = document.querySelector('#app');

let monsters = [
    {file: "monster1.svg",  alt: "A yellow monster that seems like an elephant."},
    {file: "monster2.svg",  alt: "A yellow monster with a large head."},
    {file: "monster3.svg",  alt: "A green monster that seems like a carnivorous plant."},
    {file: "monster4.svg",  alt: "A red monster with four hands."},
    {file: "monster5.svg",  alt: "A green monster that seems sad."},
    {file: "monster6.svg",  alt: "A green monster with a triangular form."},
    {file: "monster7.svg",  alt: "A purple monster with tentacles."},
    {file: "monster8.svg",  alt: "A purple monster with no legs."},
    {file: "monster9.svg",  alt: "A blue monster that seems like a chicken."},
    {file: "monster10.svg", alt: "A blue monster with two eyes at different heights."},
    {file: "monster11.svg", alt: "A big grey monster."},
    {file: "sock.svg",      alt: "A pair of socks."}
];

let gridTmpl = function (monsters) {
    return `
<div class="row">
${monsters.map(function (monster) {
return `
	<div class="grid">
	  <img width=100 src="${monster.file}" alt="${monster.alt}" />
	</div>
	`
}).join('')}
</div>
`
}

let shuffleBtn = document.querySelector('button');

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

}

shuffleBtn.addEventListener('click', function() {
    app.innerHTML = gridTmpl(shuffle(monsters));
});

app.innerHTML = gridTmpl(monsters);


