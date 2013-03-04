$(document).ready(function() {
  	
  	// Load Schedule, and get Current Session Word List
  	schedule.loadTransitionalSchedule();
	currentSession.loadWordList();

  	study.init();

  	test.init();
  

});