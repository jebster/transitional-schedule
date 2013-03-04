var study = new Study();

function Study(){

	var activeWordIndex = 0;


	this.init = function(){

		// Set default word
		$('#tran-study-page h2').text(currentSession.wordList[0].word);
		$('#tran-study-page p').text(currentSession.wordList[0].definition);

		// Append it to view
		for(var k=0; k<currentSession.wordList.length; k++){
			$('#tran-study-list').append('<li>' +currentSession.wordList[k].word +'</li>');
		}

		// Check for click event
		$('#next-word').click(function(){
			
			if(activeWordIndex<currentSession.wordList.length-1){
				activeWordIndex++;
				navigateWordList(activeWordIndex);
			}
			
		})

		$('#previous-word').click(function(){
			
			if(activeWordIndex > 0 ){
				activeWordIndex--;
				navigateWordList(activeWordIndex);
			}
			
			
		})
	}

	function navigateWordList(activeWordIndex){
		$('#tran-study-page h2').text(currentSession.wordList[activeWordIndex].word);
		$('#tran-study-page p').text(currentSession.wordList[activeWordIndex].definition);
		
	}


	

}