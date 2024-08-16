let roll = (function () {
    /**
     * Randomly shuffle an array
     * https://stackoverflow.com/a/2450976/1293256
     * @param  {Array} array The array to shuffle
     * @return {Array}       The shuffled array
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

    function createDice ( numSides ) {
	let array = [];
	for (let n = 0; n < numSides; n++) {
	    array.push(n+1);
	}
	return array;
    }
    
    function d2() {
	return shuffle(createDice(2))[0];
    }

    function d4() {
	return shuffle(createDice(4))[0];
    }

    function d6() {
	return shuffle(createDice(6))[0];
    }

    function d8() {
	return shuffle(createDice(8))[0];
    }

    function d10() {
	return shuffle(createDice(10))[0];
    }

    function d12() {
	return shuffle(createDice(12))[0];
    }

    function d20() {
	return shuffle(createDice(20))[0];
    }

    return {d2, d4, d6, d8, d10, d12, d20};
})();
