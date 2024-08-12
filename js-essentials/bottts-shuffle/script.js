const MAX_SEED = 10000
const BOTTTS_NUM = 12;

let app = document.querySelector('#app');
let bottts = generateSeeds(BOTTTS_NUM);

let botttTmpl = function (seed) {
    return `
<div class="grid">
  <img width=100 src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${seed} alt="avatar" />
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

function getRandomSeed (max) {
   return Math.floor(Math.random() * MAX_SEED);
}

function generateSeeds (num) {
    let seeds = [];

    for (let i = 0; i < num; i++) {
	seeds.push(getRandomSeed(MAX_SEED));
    }

    return seeds;
    
}

function renderBottts(seeds) {
    let row = document.createElement('div');
    row.className = 'row';
    
    row.innerHTML = seeds.map( function(seed) {
	return botttTmpl(seed);
    } ).join('');
    
    return row;
}

shuffleBtn.addEventListener('click', function() {
    app.innerHTML = ''; app.append(renderBottts(shuffle(bottts)));
});

app.append(renderBottts(bottts));
