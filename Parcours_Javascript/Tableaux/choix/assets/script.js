let leNom = function(Acteurs){
	return "Le numero " + Acteurs.length + " est " + Acteurs;
}

let acteurs = ["Kevin", "Wouter", "Kyle"];
	for (let i = 0; i < acteurs.length; i++){
		 let message = leNom(acteurs[i]);
		 console.log(message);
	}