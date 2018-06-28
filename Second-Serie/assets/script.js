//Exercice 1 
// function bt () {
// 	long = prompt("Entrez la longueur");
// 	lang = prompt("Entrez la largeur");
// 	alert(long * lang);
// } 



// Exercise 2
// function bt() {
// 	let rayon = parseInt(prompt("Saisisez Rayon"));
// 	alert((rayon**2) * 3.14);
// }

//Exercice 3
// let a = 3;
// b = 2; 

// function triple(x){
// 	return x * 3;
// }

// function affiche(){
// 	alert(triple(a));
// 	alert(triple(b));
// }

//Calculitrice//
// function Meilyn(){
// let	a =parseInt(prompt("Entrez votre premier numerà"));
// 	b =parseInt(prompt("Entrez 2éme numero"));
// 	x = a + b;
// 	alert("Vous avez " + x + " Hamburguers"); 
// }

// Meilyn()

// Exercice #4

/*let tab = [-2 , 1 , 4];

function addittionel(x){
  return x + 2;
} 
function affiche(){
	alert(addittionel(tab[0]));
	alert(addittionel(tab[1]));
 	alert(addittionel(tab[2]));
}
*/
// Exercice 6 - appel à une fonction retournant une valeur

// let tab = [-2, 1, 4];
// 	first = [0];
// 	last = [tab.length - 1] 
// function soustrait(x){
//   return Math.sign(-2)

// }

// function affiche(){
// alert(soustrait(first));
// alert(soustrait(last));
// }

// Exercice #7

// function faireChoix()
// {
// 	let user = parseInt(prompt("Faire une choix entre 1/2/3 ou autre numero");
// 	switch(user){
// 		case 1: 
// 		alert("Merci");
// 		break;
// 		case 2:
// 		alert("Bonjour");
// 		break;
// 		case 3 :
// 		alert("Au revoir");
// 		break;
// 		default:
// 		alert("Pardon, que voulez-vous ?");

// 	}

// }

// Exercice #8
// function jourDeLaSemaine() {

// 		let day;

// 		switch (new Date().getDay()){
// 			case 0:
// 				day = "Dimanche";
// 				break;
// 			case 1:
// 				day = "Lundi";
// 				break;
// 			case 2:
// 				day = "Mardi";
// 				break;
// 			case 3:
// 				day = "Mercredi";
// 				break;
// 			case 4:
// 				day = "Jeudi";
// 				break;
// 			case 5:
// 				day ="Vendredi";
// 				break;
// 			case 6:
// 				day = "Samedi";
//				break;

// }
// document.getElementById("date").innerHTML = "Aujourd'hui est " + day  ;
// }

// EXERCISE #9

// function testWhile() {
// let user = prompt("Entrez phrase");
// p = "p";
// while (user != p) {
// user = prompt("Entrez phrase");
// }

// alert(user)
// }
// function testWhile () {
// 	let say = prompt("Introduisez un politesse");
// 	while ( say != "Bonjour") {
// 		say = prompt("Introduisez un politesse");
// 	}
// 	alert(user)
// }

// function testWhile(){
// 	let user = prompt("Choissisez chaîne des caractères contenant lettre \"P\" ");
// 	p = user.indexof("p");
// 	document.getElementById("caractere").innerHTML = p;
// }

// Exercice 10 - Utilisation de la Boucle For

//  function somme() {
// 	 let result = 0;
// 	 for(let i = 0; i < 3; i++){
// 	 	let num = parseInt(prompt("Introduisez un numero"));
// 	 	result += num;
// 	 }
// alert(result);
// } 	

// Exercice # 11

	// function calculMoyenne() {
 //                let addition = 0;
 //                let nombreDeNombre = 0;
 //                let moyenne = 0;
 //                let negatif = false;
 //                let newNumberTest = 1;
 //                let newNumber = 0;
 //                while (negatif == false) {
 //                    while (newNumber >= 0 || isNaN(newNumber) == true) {
 //                    newNumber = prompt("Entrez un nombre entier");
 //                    newNumber = parseInt(newNumber);
 //                    newNumberTest = newNumber % 1;
 //                    if (newNumberTest == 0 && newNumber >= 0 && isNaN(newNumber) == false) {
 //                        ++nombreDeNombre;
 //                        addition += newNumber;
 //                    }
 //                    else if (newNumberTest == 0 && newNumber < 0 && isNaN(newNumber) == false) {
 //                        ++nombreDeNombre;
 //                        addition += newNumber;
 //                        moyenne = addition / nombreDeNombre;
 //                        alert("La moyenne des nombres est " + moyenne + " et il y a eu " + nombreDeNombre + " valeurs.");
 //                        negatif = true;
 //                    }
 //                    else {
 //                        alert("Ce n'est pas un nombre premier");
 //                    }
 //                    }
 //                }
 //            }

	//Exercice 12 - Conversion de température Celsius, Fahrenheit et Kelvin


    // function conversionTemperature() {
    //         var menu = prompt("Menu:\n" + "0 : Fin du programme\n" +
    //             "1 : De Celsius vers Fahrenheit\n" + "2 : De Celsius vers Kelvin\n" +
    //             "3 : De Fahrenheit vers Celsius\n" + "4 : De Fahrenheit vers Kelvin\n" +
    //             "5 : De Kelvin vers Celsius\n" + "6 : De Kelvin vers Fahrenheit\n");
    //         var temperature;
    //         var result;
    //         if (menu == 1) {
    //             temperature = parseFloat(prompt("Quelle température en Celsius ?"));
    //             result = (temperature * (9/5)) + 32;
    //             alert("La conversion de " + temperature + " °C est de " + result + " °F.")
    //         }
    //         else if (menu == 2) {
    //             temperature = parseFloat(prompt("Quelle température en Celsius ?"));
    //             result = temperature + 273.15;
    //             alert("La conversion de " + temperature + " °C est de " + result + " K.")
    //         }
    //         else if (menu == 3) {
    //             temperature = parseFloat(prompt("Quelle température en Fahrenheit ?"));
    //             result = (temperature - 32) / (9/5);
    //             alert("La conversion de " + temperature + " °F est de " + result + " °C.")
    //         }
    //         else if (menu == 4) {
    //             temperature = parseFloat(prompt("Quelle température en Fahrenheit ?"));
    //             result = (temperature - 32 ) * (5/9) + 273.15;
    //             alert("La conversion de " + temperature + " °F est de " + result + " K.")
    //         }
    //         else if (menu == 5) {
    //             temperature = parseFloat(prompt("Quelle température en Kelvin ?"));
    //             result = temperature - 273.15;
    //             alert("La conversion de " + temperature + " K est de " + result + " °C.")
    //         }
    //         else if (menu == 6) {
    //             temperature = parseFloat(prompt("Quelle température en Kelvin ?"));
    //             result = (temperature * (9/5)) - 459.67;
    //             alert("La conversion de " + temperature + " K est de " + result + " °F.")
    //         }
    //     }
//Exercice 13
      function calculIMC() {
        poids = parseFloat(prompt("Entrez votre poids :"));
        taille = parseFloat(prompt("Entrez votre taille :"));
        indice = poids / (taille / 100) ** 2;
        alert("votre IMC est de " + indice.toFixed(2))

        if (indice < 16.5) {
          alert("Vous êtes en dénutrition ou famine")
        }

        else if (indice > 16.5 & indice < 18.5) {
          alert("maigreur")
        }

        else if (indice > 18.5 & indice < 25) {
          alert("corpulence normale")
        }

        else if (indice > 25 & indice < 30) {
          alert("surpoids")
        }

        else if (indice > 30 & indice < 35) {
          alert("obésité modérée")
        }

        else if (indice > 35 & indice < 40) {
          alert("obésité sévère")
        }

        else if (indice > 40) {
          alert("obésité morbide")
        }

      }
