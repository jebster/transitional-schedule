var currentSession = new CurrentSession();

function CurrentSession(){

	this.wordList = new Array();

	this.loadWordList = function(){


		// Load first set
		for(var k=0; k<10; k++){
			// Load first set
			this.wordList[k] = schedule.transitional[1][0][k];

			// Load second set
			this.wordList[k+10] = schedule.transitional[1][1][k];
		}

		

		
			
	}

}