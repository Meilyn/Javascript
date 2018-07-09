
function score(){
	let sCore= parseInt(prompt("Entre votrez score"));
	let result;

		if (sCore >= 90) { 
			result = "VOUS AVEZ LE RANG A";
		}
		else
			if (sCore <= 90 && sCore >= 50) {
				result = "VOUS AVEZ LE RANG B";	
			}
		else
			if (sCore <= 50 ) {
				result = "VOUS AVEZ LE RANG C";
			}
		else {
			result = "PAS DE RANGE POUR CETTE SCORE";
		}
	document.getElementById("resultado").innerHTML = result;			
}
