var schedule = new Schedule();



function Schedule(){

	var sessionNum = 14;

	this.transitional = new Array();
	this.equally = new Array();

	for(var k=1; k<sessionNum+1; k++){
		this.transitional[k]=[];
		this.equally[k]=[];
	}
	

	this.loadTransitionalSchedule = function(){

		this.transitional[1][0] = SetA;
		this.transitional[1][1] = SetX;

		this.transitional[2][0] = SetA;
		this.transitional[2][1] = SetB;

		this.transitional[3][0] = SetB;
		this.transitional[3][1] = SetC;

		this.transitional[4][0] = SetA;
		this.transitional[4][1] = SetC;

		this.transitional[5][0] = SetB;
		this.transitional[5][1] = SetX;

		this.transitional[6][0] = SetC;
		this.transitional[6][1] = SetX;

		this.transitional[7][0] = SetA;
		this.transitional[7][1] = SetX;

		this.transitional[8][0] = SetB;
		this.transitional[8][1] = SetX;

		this.transitional[9][0] = SetA;
		this.transitional[9][1] = SetC;

		this.transitional[10][0] = SetB;
		this.transitional[10][1] = SetX;

		this.transitional[11][0] = SetA;
		this.transitional[11][1] = SetC;

		this.transitional[12][0] = SetB;
		this.transitional[12][1] = SetX;

		this.transitional[13][0] = SetA;
		this.transitional[13][1] = SetC;

		this.transitional[14][0] = SetB;
		this.transitional[14][1] = SetX;


	}

	this.loadEquallySchedule = function(){


	}

	

	this.navigateWord = function(){
		
	}



}