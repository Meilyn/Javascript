let numRandom = 0;

$(document).ready(function(){
    console.log(numRandom = Math.floor(Math.random() * 100));
      $("#random").click(function(){
        let number =prompt("Alors, cher petit numero.Dis moi donc, Qui-es tu (0 et 100)?"); 
      
          if (number < numRandom){
            alert("C'est plus!");
          } 

          else if (number > numRandom){
            alert("c'est moins!")
          }

          else {
            alert("CORRECT, Congratulations!");
            if(number == numRandom){
              $("#random").click(function(){
                let count = 0;
                count = count + 1;
                alert("Vous avez été " + count + " fois!");
              });
            }
          }

      });      
});