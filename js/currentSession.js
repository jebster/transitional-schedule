var currentSession = new CurrentSession();


function CurrentSession(){

	this.wordList = new Array();

	this.loadWordList = function(courseType, sessionNo){


		
		if(courseType == 'transitional'){

			for(var k=0; k<10; k++){
				// Load first set
				this.wordList[k] = schedule.transitional[sessionNo][0][k];

				// Load second set
				this.wordList[k+10] = schedule.transitional[sessionNo][1][k];
			}
		}else if(courseType == 'equally'){
			for(var k=0; k<10; k++){
				// Load first set
				this.wordList[k] = schedule.equally[sessionNo][0][k];

				// Load second set
				this.wordList[k+10] = schedule.equally[sessionNo][1][k];
			}
		}
		

		

		
			
	}

}