let TreasureChest = (function () {
    function Constructor () {
	this.loot = { gold: 0, silver: 0, bronze: 0 };
    }

    Constructor.prototype.addGold = function (qty) {
	this.loot.gold += qty;

	return this;
    }

    Constructor.prototype.addSilver = function (qty) {
	this.loot.silver += qty;

	return this;
    }

    Constructor.prototype.addBronze = function (qty) {
	this.loot.bronze += qty;

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
	return `Gold: ${this.loot.gold}, Silver: ${this.loot.silver}, Bronze: ${this.loot.bronze}`;
    }

    return Constructor;
})();

