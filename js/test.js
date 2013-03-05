var test = new Test();

function Test(sessionNo){

	var currentQuestion=0;

	this.init = function(){
		// Set default word
		$('#test-page h2').text(currentSession.wordList[0].word);

		$('#test-page label:nth-child(1)').html('<input type=\"radio\" name=\"optionsRadios\" id=\"options1\" value=\"option1\" checked>' +currentSession.wordList[0].choice1);
		$('#test-page label:nth-child(2)').text(currentSession.wordList[0].choice2);
		$('#test-page label:nth-child(3)').text(currentSession.wordList[0].choice3);
		$('#test-page label:nth-child(4)').text(currentSession.wordList[0].choice4);

		/*
		$('#test-page li:nth-child(1)').text(currentSession.wordList[0].choice1);
		$('#test-page li:nth-child(2)').text(currentSession.wordList[0].choice2);
		$('#test-page li:nth-child(3)').text(currentSession.wordList[0].choice3);
		$('#test-page li:nth-child(4)').text(currentSession.wordList[0].choice4);
		*/

		// Check for click event
		$('#next-question').click(function(){
		
			if(currentQuestion<currentSession.wordList.length-1){
				
				currentQuestion++;
				navigateTestList(currentQuestion);
			} else{
				//end session

			}
		
		})

		//check for next session
		$('#next-session').click(function(){
			
			if(localStorage.tCurCourse == 1){

				var num = localStorage.tCurSession;
				num++;
				localStorage.tCurSession = num;
				
				
			}else if(localStorage.eCurCourse == 1){
				var num = localStorage.eCurSession;
				num++;
				localStorage.eCurSession = num;
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