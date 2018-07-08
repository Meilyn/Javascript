# Exercice Jquery - Partie 3

par **Meilyn ANDRADE**

**IMPORTANT**
Vous devez utiliser Jquery pour faire les exercices.

## Exercice 1
Construisez une page html avec un bouton et un champ texte dans lequel on affiche le nombre de clics sur le bouton.

```
    $(document).ready(function(){
  let compteur = 0;
    $("#clique-moi").click(function(){
      compteur = compteur + 1;
        $("h3").text("Le nombre de cliques est de " + compteur);
    });
});
```

## Exercice 2
Construisez une page html avec un bouton "+", un bouton "-" et un champ texte dans lequel on augmente ou baisse le chiffre en fonction des boutons cliqués.

```
 $(document).ready(function(){
  let compteur = 0;
    $("#_plus").click(function(){
      compteur = compteur + 1;
        $("h3").text("Le nombre de cliques est de " + compteur);
    });
    $("#_moins").click(function(){
      compteur = compteur - 1;
      $("h3").text("Le nombre de cliques est de " + compteur);
    });
});
```

## Exercice 3
Construisez une page html avec un bouton et un champ texte. Le but est de trouver un nombre entre 0 et 100. A chaque réponse la page répond :
- plus
- moins
- correct

Quand la réponse est trouvée, on obtient le nombre d'essai que l'on a fait.

## Exercice 4
Construisez une page html avec 5 boutons et un rectangle. Chaque bouton provoque une action sur le rectangle.

- Bouton 1 : augmente la hauteur de 10px, si il dépasse 100px, il remet la hauteur à 10px
- Bouton 2 : met le rectangle en vert
- Bouton 3 : remet les couleurs initiales
- Bouton 4 : fait disparaître le rectangle
- Bouton 5 : fait réaparaître le rectangle


```
$(document).ready(function(){
      $("#hauteur").click(function(){
        if ($("#rectangle").height() >= 100) {
          $("#rectangle").css("height","110px");
        }
      });
      $("#couleur").click(function(){
        $("#rectangle").css("background-color","green");
      });
      $("#initial").click(function(){
        $("#rectangle").removeAttr('style');
      });
      $("#cacher").click(function(){
        $("#rectangle").hide();
      });
      $("#disparaitre").click(function(){
        $("#rectangle").fadeOut(1000);
      });
      $('#reaparaitre').click(function(){
        $("#rectangle").fadeIn(1000);
      });
});
```

## Exercice 5
Construisez une page html avec un carré et un champ de saisie de texte dans un formulaire.
Lorsque l'on appuie sur une touche de direction le carré se déplace de 10 px dans la bonne direction.  
BONUS : Quand le bloc atteint un bord de la page, il doit réaparaître de l'autre côté.
