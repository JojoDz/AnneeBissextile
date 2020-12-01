//variable pour récupérer l'année saisie par l'utilisateur
let anneeSaisie = document.querySelector("#annee");
//variable pour afficher dans la div #result le résultat
let resultat = document.querySelector(".result");

// au click de #bouton -> condition si l'année est divisible 4 mais pas 100 ou divisible par 400
document.querySelector("#bouton").addEventListener("click", () => {
    if (anneeSaisie.value % 4 === 0 && anneeSaisie % 100 !== 0 || anneeSaisie %400 === 0) {
        //message à apparaître dans la div #result si elle est bissextile
        resultat.innerHTML = anneeSaisie.value + " est une année bissextile ! 	\ud83d\ude0e";
        } 
    else { //sinon
                resultat.innerHTML = anneeSaisie.value + " n'est pas une année bissextile ! \uD83D\uDE43";
            }
});


// Récupérer (onClick à ajouter dans HTML) + afficher la valeur dans l'input (console)
// function getValue() {
//     // Sélectionner l'élément input et récupérer sa valeur
//     var annee = document.getElementById("input").value;
//     // Afficher la valeur
//     console.log(input);
// }

//Règle en fonction 
// var annee = 2020;

// function bissextile(annee) {
//     if (annee%4 === 0 && annee%100 !== 0 || annee%400 === 0) {
//         result = true;
//         console.log(annee + " est une année bissextile ! &#127774;");
//     }
//     else {
//         result = false;
//         console.log(annee + " n'est pas une année bissextile ! &#127770;");
//     }
// }

// bissextile(annee);
