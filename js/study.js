var study = new Study();

function Study(){

	var activeWordIndex = 0;

	this.init = function(courseType, sessionNo){


		// Set Course
		if(courseType == 'transitional'){
			$('.current-course').text('Transitional');
		}else if(courseType == 'equally'){
			$('.current-course').text('Equally Spaced');
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

			// If last question, prompt user to take a test
			if(activeWordIndex == currentSession.wordList.length-1){
				$('.btn-float').animate({
				    bottom: '+=30',
				  }, 400);

				$('.btn-float').animate({
				    bottom: '-=30',
				  }, 400);
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

		// Set styling stuff
		$('#study-page h2').text(currentSession.wordList[activeWordIndex].word);
		$('#study-page p').text(currentSession.wordList[activeWordIndex].definition);
		$('#current-qsn').text(activeWordIndex+1);
		$('#word-list').find('.active-word').removeClass('active-word');
		$('#word-list li').eq(activeWordIndex).addClass('active-word');

		// Set Progress Bar
		var progress = (activeWordIndex+1)/(currentSession.wordList.length)*100;
		$('.bar').css('width', progress +'%');

		

		// Scrolling of words to go above
		if(activeWordIndex%3 == 0) {
			$('#word-list').animate({
		     	scrollTop: 40*activeWordIndex,
			}, 1000);
		}

		
			
	}

}


