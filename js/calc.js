document.addEventListener("DOMContentLoaded", function(event){
	/* functions needed:
	- add, subtract, divid, muiltply, clear screen, equals
	*/




	var Num1 = "";
	var op = "";
	var Num2 = "";
	var ScreenAdd = "";
	var displayScreen = document.getElementById("screen");


	function Add(Num1, Num2){
		return Num1 + Num2;
	}

	function Subtract(Num1, Num2){
		return Num1 - Num2;
	}

	function Muilty(Num1, Num2){
		return Num1 * Num2;
	}

	function clearScreen(){
		displayScreen.innerHTML="Sparta\ Calculator";
	}







	
	displayScreen.addEventListener("click", function(event){
		//displayScreen.style.color = "red";
		//displayScreen.innerHTML= "1";
	})

	//Number buttons event
	var butts = document.getElementsByClassName("buttonNum"); //set butts to get elements
	console.log(butts);
	for (var i = 0; i < butts.length; i++){
		butts[i].addEventListener("click",function(event) { //adds click event on buttonS
			//displayScreen.innerHTML = this.innerHTML ; //this point to this!!!

			if (Num1 == "" ){
				console.log(displayScreen.innerHTML);
				Num1 = parseInt(this.innerHTML); //sets value to inner html

			} else if (op != ""){
				Num2 = parseInt(this.innerHTML);
				displayScreen.innerHTML += "" + op + "" + Num2; //adds onto the scrren but still over 
			}



			console.log(Num1);
/*
			if (Num2 == "" && op != "" && Num1 != ""){
				Num2 = this.innerHTML;
				console.log(op)
			}*/
			// body...
		})
	}

	//Operator buttons
	var butOps = document.getElementsByClassName("operator"); //set operators to ops class
	for (var i = 0; i < butOps.length; i++){
		butOps[i].addEventListener("click", function(event){
			//displayScreen.innerHTML = this.innerHTML;
			op = this.innerHTML; //sets the inner HTML to the op value
			//console.log(op)
			displayScreen.innerHTML = Num1 + " "; //+ op ;
		})
	}

	//equals button
	var eqButt = document.getElementsByClassName("equals");
	for (var i = 0; i < eqButt.length; i++){
		eqButt[i].addEventListener("click", function(event){
			console.log("eq fam");
		})
	}

	//clear button
	var clearButt = document.getElementsByClassName("buttonClear");
	clearButt[0].addEventListener("click", function(event){
		console.log("clear");
		clearScreen();
		})
		
	








})
/*

var selected = document.querySelectorAll('li.selected');
	for (var i = 0; i < selected.length ; i++) {

		butts
}
});*/