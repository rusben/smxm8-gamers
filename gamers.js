/**
 * "gamers" computes information from gamers different games
 *
 * @name: gamers
 * @version: 0.0.1
 * @author: rusben
 * @description: Computes information from gamers different games
 * @params {none}
 * @return: none
 */	
var gamers = {
	version: "0.0.1",
	version: function () {
		return this.version;
	},
	/**
	 * @name: randomAssign
	 * @description: Assign random elements to items
 	 * @params {items, nelements, elements}
 	 * @return: a list of nelements 
	 */
	randomAssign: function (items, elements, nelements) {

		var result;

 		for (i = 0; i < items.length; i++) {
 			result[i] = items[i];

 			for (j = 0; j < nelements; j++) {
 				result[i][j] += elements[self.randomNumberBetween(0, nelements)];
			} 
		}

		return result; 
	},

	/**
	 * @name: randomNumberBetween
	 * @description: Returns a random number between start and end
 	 * @params {start, end}
 	 * @return: An integer between start and end
	 */
	randomNumberBetween: function (start, end) {
		return Math.floor(Math.random() * end) + start;  
	}

}