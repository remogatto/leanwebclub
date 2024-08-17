let TreasureChest = (function () {
    
    function Constructor (initialLoot = {}) {

	// Merge options into defaults
	let {bronze, silver, gold, loot} = Object.assign({
	    bronze: 0,
	    silver: 0,
	    gold: 0,
	}, initialLoot);
	
	Object.defineProperties(this, {
	    gold:   {value: gold,   writable: true},
	    silver: {value: silver, writable: true},
	    bronze: {value: bronze, writable: true}
	});
    }

    Constructor.prototype.addGold = function (qty) {
	this.gold += qty;

	return this;
    }

    Constructor.prototype.addSilver = function (qty) {
	this.silver += qty;

	return this;
    }

    Constructor.prototype.addBronze = function (qty) {
	this.bronze += qty;

	return this;
    }

     /**
     * Randomly shuffle an array
     * https://stackoverflow.com/a/2450976/1293256
     * @param  {Array} array The array to shuffle
     * @return {Array}       The shuffled array
     */
    function shuffle(array) {

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

    Constructor.getRandomLoot = function () {
	let amount = [];
	
	for (let qty = 0; qty < 50; qty++) {
	    amount.push(qty+1);
	}

	return {
	    gold: shuffle(amount)[0],
	    silver: shuffle(amount)[0],
	    bronze: shuffle(amount)[0],
	}
    }
    
    Constructor.prototype.getLoot = function () {
	return `Gold: ${this.gold}, Silver: ${this.silver}, Bronze: ${this.bronze}`;
    }

    return Constructor;
})();

