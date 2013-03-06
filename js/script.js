


$(document).ready(function() {

	if(localStorage.tCurSession > 14) {
		localStorage.tCurSession = 1;
				
	}
	if(localStorage.eCurSession > 14) {
		localStorage.eCurSession = 1;
	}
	
	// To indicate which course a person is taking
	var tranCourse = localStorage.tCurCourse;
	var equalCourse = localStorage.eCurCourse;

	// Current Session for individual courses
	var tSessionNo = localStorage.tCurSession;
	var eSessionNo = localStorage.eCurSession;
  	
  	// Load Schedule, and get Current Session Word List
  	schedule.loadTransitionalSchedule();
  	schedule.loadEquallySchedule();

  	// Navigate from Courses Page
  	$('#trans-schedule').click(function(){

        localStorage.tCurCourse = 1;
        localStorage.eCurCourse = 0;
    })

    $('#equal-schedule').click(function(){

        localStorage.tCurCourse = 0;
        localStorage.eCurCourse = 1;

    })

	

	if(tranCourse == 1){
		
		currentSession.loadWordList('transitional',tSessionNo);
		study.init('transitional', tSessionNo);
		test.init(tSessionNo);
		
		
	}else if(equalCourse == 1){
		
		currentSession.loadWordList('equally', eSessionNo);
		study.init('equally', eSessionNo);
		test.init(eSessionNo);
		
		
  	}

});