function pluriel(){
	let motSing =prompt("Entre un article");
	let nom = parseInt(prompt("Entrez une quantité"));
	let result;

	if (nom >= 2) {
		result = "Je possède " + nom +" "+ motSing +"s";
	}
	else {
		result = "Je possède " + nom + " " + motSing;
	}
	document.getElementById("resultado").innerHTML = result;
}
