// let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 ,8, 9];
// let sum = numbers.reduce(mySum);
// document.getElementById("resultado").innerHTML = "La somme est " + sum;

// function mySum(total, value , index, array){
// 	return total + value;
// }

	let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 ,8, 9];
	let sum =0;

	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i]
	}
		document.getElementById('resultado').innerHTML ="Le resultat est " + sum;