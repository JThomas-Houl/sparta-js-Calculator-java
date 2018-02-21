document.addEventListener("DOMContentLoaded", function(event){
	/* functions needed:
	- add, subtract, divid, muiltply, clear screen, equals
	*/




	var oldNum = "";
	var op = "";
	var newNum = "";
	var ScreenAdd = "";
	var displayScreen = document.getElementById("screen");


	function Add(){
		return displayScreen.innerHTML = oldNum + newNum;
	}

	function Subtract(){
		return displayScreen.innerHTML = oldNum - newNum;
	}

	function Muilty(){
		return displayScreen.innerHTML = oldNum * newNum;
	}

	function Divid(){
		return displayScreen.innerHTML = oldNum / newNum;
	}

	function clearScreen(){ //clears the screen works
		displayScreen.innerHTML="Spsarta\ Calculator";
		oldNum = "";
		newNum = "";
		op = "";
	}







	
	displayScreen.addEventListener("click", function(event){
		//displayScreen.style.color = "red";
		//displayScreen.innerHTML= "1";
	})

	//Number buttons event
	var butts = document.getElementsByClassName("buttonNum"); //set butts to get elements
	console.log(butts);
	for (var i = 0; i < butts.length; i++){
		butts[i].addEventListener("click",function(event) { 

			oldNum = parseInt(this.innerHTML);
			displayScreen.innerHTML = oldNum

			

			if(newNum == ""){
				newNum = oldNum;
				newNum = parseInt(this.innerHTML);
				//console.log(oldNum+ " " +newNum)
			}
		//adds click event on buttonS
			//displayScreen.innerHTML = this.innerHTML ; //this point to this!!!
			/*
			if (Num1 == "" ){
				console.log(displayScreen.innerHTML);
				Num1 = parseInt(this.innerHTML); //sets value to inner html

			} else if (op != ""){
				Num2 = parseInt(this.innerHTML);
				displayScreen.innerHTML += "" + op + "" + Num2; //adds onto the scrren but still over 
			}*/



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
			displayScreen.innerHTML = op; //+ op ;
		})
	}

	//equals button
	var eqButt = document.getElementsByClassName("equals");
	for (var i = 0; i < eqButt.length; i++){
		eqButt[i].addEventListener("click", function(event){
			//console.log("eq fam");
			switch(op){
				case "+":
				Add()
				break;

				case "-":
				Subtract()
				break;

				case "/":
				Divid()
				break;

				case "*":
				Muilty()
				break;

			}
		})
	}

	//clear button
	var clearButt = document.getElementsByClassName("buttonClear");
	clearButt[0].addEventListener("click", function(event){
		//console.log("clear");
		clearScreen();
		})

})
/*

var selected = document.querySelectorAll('li.selected');
	for (var i = 0; i < selected.length ; i++) {

		butts
}
});*/