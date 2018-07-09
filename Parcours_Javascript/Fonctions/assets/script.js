 function soustractions(){
	let num1 = parseInt(prompt("Entrez une valeur"));
	let num2 = parseInt(prompt("Entrez une valeur"));
	let total = num1 - num2;
	document.getElementById("resultado").innerHTML ="Le resultat est : " + total;
}

 function division(){
	let num1 = parseInt(prompt("Entrez une valeur"));
	let num2 = parseInt(prompt("Entrez une valeur"));
	let total = num1 / num2;
	document.getElementById("resultado").innerHTML ="Le resultat est : " + total;
}
 function multiplications(){
	let num1 = parseInt(prompt("Entrez une valeur"));
	let num2 = parseInt(prompt("Entrez une valeur"));
	let total = num1 * num2;
	document.getElementById("resultado").innerHTML ="Le resultat est : " + total;
}

 function pourcentage(){
	let num1 = parseInt(prompt("Entrez un pourcentage"));
	let num2 = parseInt(prompt("Entrez une valeur"));
	let total = (num1 * num2)/100;
	document.getElementById("resultado").innerHTML ="Le pourcentage est : " + total + "%";
}

 function vitesse(){
	let v = parseInt(prompt("Entrez la Vitesse"));
	let d = parseInt(prompt("Entrez la Distance en heures"));
	let total = v / d;
	document.getElementById("resultado").innerHTML ="Le resultat est : " + total + "km/h";
}
