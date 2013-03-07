var study = new Study();

function Study(){

	var activeWordIndex = 0;


	this.init = function(courseType, sessionNo){


		// Set Course
		if(courseType == 'transitional'){
			$('.current-course').text('Transitional Retrieval');
			if(localStorage.tCurSession > 14) {
				alert('You have completed this course!');
			}
		}else if(courseType == 'equally'){
			$('.current-course').text('Equally Spaced Retrieval');
			if(localStorage.eCurSession > 14) {
				alert('You have completed this course!');
			}
		}


		// Set Session
		$('.current-session').text(sessionNo);



		// Append it to view
		for(var k=0; k<currentSession.wordList.length; k++){
			$('#word-list').append('<li>' +currentSession.wordList[k].word +'</li>');
		}

		// Set default word
		$('#study-page h2').text(currentSession.wordList[0].word);
		$('#study-page p').text(currentSession.wordList[0].definition);
		$('#word-list li:nth-child(1)').addClass('active-word');

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
		$('#word-list').find('.active-word').removeClass('active-word');
		$('#word-list li').eq(activeWordIndex).addClass('active-word');
		
	}


	

}