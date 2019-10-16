/*
Règles du jeu:

- Le jeu pour 2 joueurs, jouant chacun son tour.
- A chaque tour, un joueur lance un dé autant de fois qu'il le souhaite. Chaque résultat est ajouté à son score TEMPORAIRE.
- MAIS, si le joueur obtient un 1, tout son score TEMPORAIRE sera perdu. Après cela, c'est au tour du prochain joueur.
- Le joueur peut choisir de «Garder», ce qui signifie que son score TEMPORAIRE est ajouté à son score GLOBAL. Après cela, c'est au tour du prochain joueur.
- Le premier joueur à atteindre 100 points sur le score GLOBAL remporte la partie.

*/
var score, scoreTempo, joueurActif, jeuxEnCour, inputScore;
init();
// Lorsque 1 tombe sur le dé tu as perdu, il passe a l'autre joueur

// utiliser en dessous au lieu de var score1 = 0 var score2 = 0
score = [0, 0];
scoreTempo = 0;
joueurActif = 0;

// mettre le score maximum
inputScore = prompt("Score maximale");

//  selection de l'id et je vais change son contenu de texte avec textContent par la donnée dice
// après on rajoute joueurActif pour avoir le jouer 0 ou 1 on peut mettre var joueurActif = 1; au dessus pour sélectionner jouer 2
// document.querySelector('#actuel-' + joueurActif).textContent = dice;

// pour récupérer les données avec x et la console montre que la dice fonctionne tjs
// x = document.querySelector('#actuel-' + joueurActif).textContent;
// console.log(x);

// sélection de la class "de" et on ne l'affiche pas grance au style.display = none !
// document.querySelector('.de').style.display = 'none';

// il va ajouter un évenement(addEventListener)lorsqu'on click une fonction(btn) est lancer
// document.querySelector('.btn-lancer').addEventListener('click', btn);
// function btn(){
//     console.log('coucou');
// }

// querySelector est utilisé lorsqu'on fait plusieur sélection
// document.querySelector('.de').style.display = 'none';

// getElementById est utilisé lorsqu'on fait une sélection
// document.getElementById('score-0').textContent = 0;
// document.getElementById('score-1').textContent = 0;
// document.getElementById('actuel-0').textContent = 0;
// document.getElementById('actuel-1').textContent = 0;




// scoreForm

// var DOMStrings = {
//     inputScore: '.myForm',
//     type: document.querySelector(DOMStrings.inputScore).value
// }
// console.log(DOMStrings.type);


// une fonction anonyme est lier a cette classe la je pense ???
document.querySelector('.btn-lancer').addEventListener('click', function(){   
    if (jeuxEnCour){
        var totalde, dice, dice2;
         totalde = dice + dice2
        // 1. générer un chiffre aléatoire de 1 a 6
        dice = Math.floor(Math.random() * 6)  + 1;
        dice2 = Math.floor(Math.random() * 6)  + 1;
        // 2. afficher dans le dom
        var deDom = document.querySelector('.de') 
        var deDom2 = document.querySelector('.de2') 
        
        deDom.style.display = 'block';
        deDom2.style.display = 'block';
        // incrémente l'image du dé
        deDom.src = 'de-' + dice + '.png';
        deDom2.src = 'de-' + dice2 + '.png';
        // 3. Mise à jour du score actuel si différent de 1 
        if (dice !== 1 && dice2 !== 1 ){
            if(dice == 6 && dice2 == 6){
                joueurSuivant();
            }
            else{//si le dice est différent de 1 on rajoute le score dans scoreTempo
                scoreTempo += (dice + dice2);
                document.querySelector('#actuel-' + joueurActif).textContent = scoreTempo;
            }
            
            
        }
        else{
            joueurSuivant();
        }
    }
});




function myFunction() {
    var inpObj = document.getElementById("id1");
    var inputClient = [];
    var test = document.getElementById('id1').textContent = inputClient;

    console.log(test,inputClient);
    
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
  }

// sur le bouton garder
document.querySelector('.btn-garder').addEventListener('click', function(){
    if (jeuxEnCour){
        // 1. Ajout du score temporaire au score du joueur
        score[joueurActif] += scoreTempo;
        // 2. Mise à jour de l'affichage
        document.getElementById('score-' + joueurActif).textContent = score[joueurActif];
        // 3. Verifier si joueur est gagnant score >= 100
        if (score[joueurActif] >= inputScore) {
            document.getElementById('nom-' + joueurActif).textContent = 'GAGNANT !';
            document.querySelector('.de').style.display = 'none';
            document.querySelector('.de2').style.display = 'none';
            document.querySelector('.joueur-' + joueurActif + '-panneau').classList.add('gagnant');
            document.querySelector('.joueur-' + joueurActif + '-panneau').classList.remove('active');
            jeuxEnCour = false;
        }
        else{
            // 4. Changer de joueur
            joueurSuivant();
        }
    }
});


// function qui va sur le "bouton garder" ligne 82 et dans le else ligne 64
function joueurSuivant(){
    // change de joueur
    joueurActif === 0 ?  joueurActif = 1 : joueurActif = 0;
    scoreTempo =  0;
    document.getElementById('actuel-0').textContent = 0;
    document.getElementById('actuel-1').textContent = 0;
    // toggle est un on ou off
    document.getElementById('.joueur-0-panneau').classList.toggle('active');
    document.getElementById('.joueur-1-panneau').classList.toggle('active');
    // stop de montrer le de après un switch de joueur
    document.querySelector('.de').style.display = 'none';
    document.querySelector('.de2').style.display = 'none';
}

// pour nouvelle partie (reinitialiser les variables)
function init(){
    jeuxEnCour = true;
    score = [0, 0];
    scoreTempo = 0;
    joueurActif = 0;
    document.querySelector('.de').style.display = 'none';
    document.querySelector('.de2').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('actuel-0').textContent = 0;
    document.getElementById('actuel-1').textContent = 0;
    document.getElementById('nom-0').textContent = 'Joueur 1';
    document.getElementById('nom-1').textContent = 'Joueur 2';
    document.querySelector('.joueur-0-panneau').classList.remove('gagnant');
    document.querySelector('.joueur-1-panneau').classList.remove('gagnant');
    document.querySelector('.joueur-0-panneau').classList.remove('active');
    document.querySelector('.joueur-1-panneau').classList.remove('active');
    document.querySelector('.joueur-0-panneau').classList.add('active');
    
}

// NOUVELLE PARTIE ne pas mettre des () a init qui sinon la fonction est lancé avant même de cliquer !
document.querySelector('.btn-partie').addEventListener('click', init);
    // remise a zéro des variables

