let app = document.querySelector('#app');

const DOOR_FILE = 'door.svg';

let state = [
    {id: "monster1",  alt: "A yellow monster that seems like an elephant.",        hidden: true},
    {id: "monster2",  alt: "A yellow monster with a large head.",                  hidden: true},
    {id: "monster3",  alt: "A green monster that seems like a carnivorous plant.", hidden: true},
    {id: "monster4",  alt: "A red monster with four hands.",                       hidden: true},
    {id: "monster5",  alt: "A green monster that seems sad.",                      hidden: true},
    {id: "monster6",  alt: "A green monster with a triangular form.",              hidden: true},
    {id: "monster7",  alt: "A purple monster with tentacles.",                     hidden: true},
    {id: "monster8",  alt: "A purple monster with no legs.",                       hidden: true},
    {id: "monster9",  alt: "A blue monster that seems like a chicken.",            hidden: true},
    {id: "monster10", alt: "A blue monster with two eyes at different heights.",   hidden: true},
    {id: "monster11", alt: "A big grey monster.",                                  hidden: true},
    {id: "sock",      alt: "A pair of socks.",                                     hidden: true}
];

let monsterImgTmpl = function (monster, index) {
return `
<img aria-live="polite"
     ${index === undefined ? 'class="grid"' : ''}
     src="${monster.hidden ? DOOR_FILE : monster.id+'.svg'}"
     alt="${monster.hidden ? `A closed door, index ${index+1}` : monster.alt}" />
`
}

let monsterBtnTmpl = function (monster, index) {
return `
<button aria-live="polite" id="${monster.id}" class="grid" aria-live="polite">
  ${monsterImgTmpl(monster, index)}
</button>
`
}

let gridTmpl = function (monsters, gameover) {
    return `
<div class="row">
${monsters.map(function (monster, index) {
  return gameover ? monsterImgTmpl(monster) : monsterBtnTmpl(monster, index);
}).join('')}
</div>
`
}

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

window.addEventListener('click', function (event) {
    if (event.target.matches('button.grid') || event.target.matches('img')) {
	let button = event.target.closest('button');

	let monster = state.find( function (monster) {
	    if (monster.id === button.id) {
		return monster
	    }
	});

	if (monster.id === 'sock') {
	    state = state.map( function (el) { el.hidden = false; return el; });
	    app.innerHTML = gridTmpl(state, true);

	    let controls = document.querySelector('#controls');
	    let tryAgainBtn = document.createElement('button');

	    tryAgainBtn.type = 'button';
	    tryAgainBtn.innerText = 'Try again!';
	    
	    tryAgainBtn.addEventListener('click', function (event) {
		state = state.map(function (el) { el.hidden = true; return el;})
		app.innerHTML = gridTmpl(shuffle(state));
		tryAgainBtn.remove();
	    });
	    
	    controls.appendChild(tryAgainBtn);
	    
	    return
	}
	
	monster.hidden = false;
	button.outerHTML = monsterImgTmpl(monster);
    }

});

app.innerHTML = gridTmpl(shuffle(state));


