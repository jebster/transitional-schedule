var SetA = new Array();
var SetB = new Array();
var SetC = new Array();
var SetX = new Array();
var database = new Database();

database.getSetA();
database.getSetB();
database.getSetC();
database.getSetX();

function Database(){


	this.getSetA = function(){
		SetA = JSON.parse(localStorage.SetA);
	}

	this.getSetB = function(){
		SetB = JSON.parse(localStorage.SetB);
	}

	this.getSetC = function(){
		SetC = JSON.parse(localStorage.SetC);
	}

	this.getSetX = function(){
		SetX = JSON.parse(localStorage.SetX);
	}

}