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

		// Style selection
		$('label').click(function(){
			$('article').find('.active-selection').removeClass('active-selection');
			$(this).addClass('active-selection');
		})


		// Check for next question event
		$('.next-question').click(function(){

			resetStyles();
			// check answer
			var chosen_ans = $('input[name=optionsRadios]:checked').val();

			// if Correct
			if(chosen_ans == currentAns) {
				totalCorrect++;
				nextQuestion();

			} else { // if wrong
				
				$('.alert').animate({
					'margin-bottom': '20',
					'opacity': '1',
				}, 400);
				$('#right-ans').text(currentSession.wordList[currentQuestion].definition);
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

	function resetStyles(){
		$('article').find('.active-selection').removeClass('active-selection');
		$('.alert').animate({
			'margin-bottom': '0',
			'opacity': '0',
		}, 400);

	}

	function nextQuestion(){

		var progress = (currentQuestion+1)/(currentSession.wordList.length)*100;
		$('.bar').css('width', progress +'%');
		// move on to next question
		if(currentQuestion<currentSession.wordList.length-1){
			currentQuestion++;
			navigateTestList(currentQuestion);

		} else{
			$('#test-score').text(totalCorrect);
			$('#done').trigger('click');
			checkFinishCourse();
		}


	}

	function checkFinishCourse(){

		if(localStorage.tCurCourse == 1){
			if(localStorage.tCurSession == schedule.transitional.length-1){
				restartCourse();
			}
			
		}else if(localStorage.eCurCourse == 1){
			if(localStorage.eCurSession == schedule.equally.length-1){
				restartCourse();
			}
		}
	}

	function restartCourse(){
		$('#restart-course-msg, #restart-course').css('display', 'block');
		$('#next-session').css('display', 'none');

		if(localStorage.tCurCourse == 1){
			localStorage.tCurSession = 1 
		}else if(localStorage.eCurCourse == 1){
			localStorage.eCurSession = 1
		}
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