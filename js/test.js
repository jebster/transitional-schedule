var test = new Test();

function Test(){

	var currentQuestion=0;

	this.init = function(){
		// Set default word
		$('#test-page h2').text(currentSession.wordList[0].word);
		$('#test-page li:nth-child(1)').text(currentSession.wordList[0].choice1);
		$('#test-page li:nth-child(2)').text(currentSession.wordList[0].choice2);
		$('#test-page li:nth-child(3)').text(currentSession.wordList[0].choice3);
		$('#test-page li:nth-child(4)').text(currentSession.wordList[0].choice4);

		// Check for click event
		$('#next-question').click(function(){
		
			if(currentQuestion<currentSession.wordList.length-1){
				
				currentQuestion++;
				navigateTestList(currentQuestion);
			} else{
				//end session
			}
		
	})
				
	}


	function navigateTestList(curQsn) {

		$('#test-page h2').text(currentSession.wordList[curQsn].word);
		$('#test-page li:nth-child(1)').text(currentSession.wordList[curQsn].choice1);
		$('#test-page li:nth-child(2)').text(currentSession.wordList[curQsn].choice2);
		$('#test-page li:nth-child(3)').text(currentSession.wordList[curQsn].choice3);
		$('#test-page li:nth-child(4)').text(currentSession.wordList[curQsn].choice4);

	}
}