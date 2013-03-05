var study = new Study();

function Study(){

	var activeWordIndex = 0;


	this.init = function(courseType, sessionNo){

		// Set Course
		if(courseType == 'transitional'){
			$('.current-course').text('Transitional Retrieval');
		}else if(courseType == 'equally'){
			$('.current-course').text('Equally Spaced Retrieval');
		}


		// Set Session
		$('.current-session').text(sessionNo);

		// Set default word
		$('#study-page h2').text(currentSession.wordList[0].word);
		$('#study-page p').text(currentSession.wordList[0].definition);

		// Append it to view
		for(var k=0; k<currentSession.wordList.length; k++){
			$('#tran-').append('<li>' +currentSession.wordList[k].word +'</li>');
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
		$('#study-page h2').text(currentSession.wordList[activeWordIndex].word);
		$('#study-page p').text(currentSession.wordList[activeWordIndex].definition);
		
	}


	

}