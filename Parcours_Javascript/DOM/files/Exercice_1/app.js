//Manipulation des Classes

let ibody = document.body;
	ibody.classList.remove('bg-aqua');
	ibody.classList.add('bg-olive');

let fP = document.getElementById('first-paragraph');
	fP.classList.remove('bg-lime', 'gray');
	fP.classList.add('aqua');

let allClass = document.querySelectorAll('.bg-silver');
	console.log(allClass);
	for (let i = 0;i < allClass.length; i++) {
	allClass[i].classList.remove("bg-silver");
	allClass[i].classList.add("bg-teal");
	}

let blockquote = document.getElementsByTagName('blockquote');
	for(let i = 0; i < blockquote.length; i++){
		blockquote[i].classList.add("bg-white");
	}
	 
// Selecteurs CSS
 	let myTable = document.querySelector('#my-table');
 	 myTable.classList.add('bg-purple');

 	 let cont = document.querySelectorAll('.container > p');
 for (var i = 0; i < cont.length; i++) {
 	cont[i].classList.add('shadow');
 }

// Exercise # 3
	let elePre = document.getElementsByTagName("pre");
		for(var i = 0; i < elePre.length; i++){
			elePre[i].style.color = ("white");
			elePre[i].style.backgroundColor = ("green");
			elePre[i].style.borderTop = ("3px solid red");
			elePre[i].style.borderBottom = ("3px solid red");
		}
	let h3First = document.getElementsByTagName("h3")[0];
		h3First.innerHTML = "<em>Itelic title ! yeah !</em>";

	let h2F = document.getElementsByTagName("h2")[0];
		h2F.innerText = "<strong>HTML doens't work !</strong>";
		h2F.style.color = ("white");	

// Creations d'elements 

	let fUl = document.getElementsByTagName('ul')[0];
	let li = document.createElement("li");
	li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a> ";
	fUl.appendChild(li);

	let link = li.querySelector('a');
		link.style.color = ("white");

//EXERCICE 4 : Création et suppression de plusieurs éléments
	let olFirst = document.getElementsByTagName('ol')[0];
	let olChildren = olFirst.children
	for (var i = (olChildren.length - 1); i >= 0; i--) {
				olFirst.removeChild(olChildren[i]);
			}		
		let Tab = ["Silent Teacher","Code Monkey", "CodeCombat"];
	for (var i = (Tab.length - 1); i >= 0; i--) {
				let newLi = document.createElement("li");
				newLi.innerText = Tab[i];
				olFirst.appendChild(newLi);
			}	

	let NText = document.getElementsByTagName("h1")[0];
		NText.innerText = "Meilyn ANDRADE";			