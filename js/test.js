var test = new Test();

function Test(sessionNo){

	var currentQuestion=0;
	var currentAns = 'null';
	var totalCorrect = 0;

	this.init = function(){
		// Set default word
		$('#test-page h2').text(currentSession.wordList[0].word);
		$('#current-qsn').text(currentQuestion+1);
		$('#choice1').text(currentSession.wordList[0].choice1);
		$('#choice2').text(currentSession.wordList[0].choice2);
		$('#choice3').text(currentSession.wordList[0].choice3);
		$('#choice4').text(currentSession.wordList[0].choice4);

		currentAns = currentSession.wordList[0].answer;


		// Check for click event
		$('#next-question').click(function(){

			// check answer
			var chosen_ans = $('input[name=optionsRadios]:checked').val();
			if(chosen_ans == currentAns) {
				totalCorrect++;
			} else {
				alert('Whoops! The right answer should be: ' +currentAns);
			}
		
			// move on to next question
			if(currentQuestion<currentSession.wordList.length-1){
				
				currentQuestion++;
				navigateTestList(currentQuestion);

			} else{

				$('#test-score').text(totalCorrect);
				$('#done').trigger('click');
				
			}
		
		})

		//Debug
		$('#skip-question').click(function(){
			
			currentQuestion = 19;
			navigateTestList(currentQuestion);
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
		$('#current-qsn').text(curQsn+1);
		$('#choice1').text(currentSession.wordList[curQsn].choice1);
		$('#choice2').text(currentSession.wordList[curQsn].choice2);
		$('#choice3').text(currentSession.wordList[curQsn].choice3);
		$('#choice4').text(currentSession.wordList[curQsn].choice4);

		currentAns = currentSession.wordList[curQsn].answer;

		$('input').removeAttr('checked');

	}
}