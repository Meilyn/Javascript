//Exercice : Langues
function Langues(){
let langue = prompt("Entrez votrez langue: EN, ES, FR ");
let message;
		if (langue == "es"){
			message = "Hola Mundo";
		}
		else 
			if (langue == "fr") {
				message = "Bonjour tout le monde";
		} 

		else 
			if (langue == "en") {
				message = "Hello World!";
		}
		else {
			message = "Choissisez entre ES/EN/FR";
		}
		document.getElementById("langue").innerHTML = message;
		} 
			