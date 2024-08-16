let TreasureChest = (function () {
    function Constructor () {
	this.gold = 0;
	this.silver = 0;
	this.bronze = 0;
    }

    Constructor.prototype.addGold = function (qty) {
	this.gold += qty;
    }

    Constructor.prototype.addSilver = function (qty) {
	this.silver += qty;
    }

    Constructor.prototype.addBronze = function (qty) {
	this.bronze += qty;
    }

    Constructor.prototype.getLoot = function () {
	return `Gold: ${this.gold}, Silver: ${this.silver}, Bronze: ${this.bronze}`;
    }
    
    return Constructor;
})();

