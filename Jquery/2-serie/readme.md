# Exercices JQuery_2
Par: Meilyn **ANDRADE**

**IMPORTANT**
Toutes les ressources aux exercices sont fournies.

## Exercice 1
  	$(document).ready(function(){
  		$("#clique-moi").click(function(){
  			alert("Hakuna Matata");
  		});
  	});


## Exercice 2
Au double click, modifier la largeur de l'image à 500px;

```
$(document).ready(function(){
          $("#image").dblclick(function(){
            $("#image").width("500px");
          });
        });
```

## Exercice 3
Afficher ou masquer la div texte au clic des liens fournis.

```
  $(document).ready(function(){
      $("#afficher").click(function(){
        $("#texte").show(1000);
      });
      $("#cacher").click(function(){
        $("#texte").hide(1000);
      });
    });
```

## Exercice 4
Au clic sur un bouton de couleur, modifier la couleur du texte de la div

```
$(document).ready(function(){
    $("#green").click(function(){
      $("#texte").css("color","green");
    });
    $("#red").click(function(){
      $("#texte").css("color","red");
    });
    $("#blue").click(function(){
      $("#texte").css("color","blue");
    });
  });
```
  
## Exercice 5
Quand un champ a le focus, définir sa bordure à "1px solid green". Quand le champ perd le focus, définir la bordure à "1px solid red"

```
$(document).ready(function(){
        $("input").focus(function(){
          $("input").css("border","1px solid green");
        });
        $("input").blur(function(){
          $("input").css("border","1px solid red");
        });
    }); 
```    

## Exercice 6
Au passage de la souris sur un bouton de couleur, colorer le texte. Le texte doit redevenir noir quand la souris quitte le bouton.

```
$(document).ready(function(){
    $("#green").mouseenter(function(){
      $("#texte").css("color","green");
    });
      $("#red").mouseenter(function(){
      $("#texte").css("color","red");
    });
      $("#blue").mouseenter(function(){
      $("#texte").css("color","blue");
    });
      $("body").mouseleave(function(){
      $("#texte").css("color","black");
    });  

});   
```


## Exercice 7
Exercice récapitulatif des séries 1 et 2. Les instructions se trouvent dans le fichier HTML.

```
$(document).ready(function(){
       $("#augmenter").click(function(){
        $("#contenu").css("font-size","120%");
       });
        $("#diminuer").click(function(){
          $("#contenu").css("font-size","80%");
      });
        $("#gras").click(function(){
          $(".vert").css("font-weight","bold");
      });
        $("#souligner").click(function(){
          $(".rouge").css("text-decoration", "underline");
      });
        $("#survol").mouseenter(function(){
          $("#myLogo").attr("src","gally-logo.png");
        });
        $("#afficher").mouseenter(function(){
          $(this).tooltip("title");  
        });
        $("#bam-bam").click(function(){
          $("h2:first","#contenu").prepend("<h3>Chapitre 1 :</h3>");
        });
        $("#bam-bam").click(function(){
          $("h2:last","#contenu").prepend("<h3>Chapitre 2 :</h3>");
        });
      });
```      
