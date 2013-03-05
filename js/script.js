


$(document).ready(function() {
	
	// To indicate which course a person is taking
	var tranCourse = localStorage.tCurCourse;
	var equalCourse = localStorage.eCurCourse;

	


	// Current Session for individual courses
	var tSessionNo = localStorage.tCurSession;
	var eSessionNo = localStorage.eCurSession;
  	
  	// Load Schedule, and get Current Session Word List
  	schedule.loadTransitionalSchedule();
  	schedule.loadEquallySchedule();

	

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