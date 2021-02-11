let list = ["cheval", "rouler", "moderne", "neige", "orange", "ordinateur", "potiron", "ours", "pays", "pizza", "classe", "formation", "hamburger", "sauce"];
let motArr = ''; // reslutat mot random
let entree = []; //stockage saisie user
let fake = []; // mauvaise entrée
let txT = ''; // Entrée user
let motArrSplit = ''; //split du mot à trouver
let tiret = ''; // affiche le mot à l'écran avec les "_"
let min = 0; // initialisation du nombre de coups
let max = 6; // nombre de coups max -1 (index des tables commence à zéro)

//générer un index random pour parcourir "list"
function randomWord() {
    motArr = list[Math.floor(Math.random() * list.length)];
    motArrSplit = motArr.split('');
    console.log("LE CHEAT C'EST MAL !!!!!!");
}
randomWord();

//capter l'entée au clavier de l'utilisateur
document.getElementById("valWord").addEventListener("click", () => {
    txT = document.getElementById("entUser").value;
    document.getElementById("entUser").focus();
    document.getElementById("entUser").value = '';
    verif(txT);
});

//comparer chaque lettre mot random à l'entrée utilisateur
function verif(letSplit) {

    if (motArrSplit.indexOf(letSplit) >= 0) {
        entree.push(txT);
        mapping();
        win();
    } else if (motArrSplit.indexOf(letSplit) === -1) {
        if (!fake.includes(txT)) { // if not txt include into fake | test si la lettre est déjà dans la liste des fails
            min++;
            fake.push(txT);
            document.getElementById("letChoix").innerHTML = fake;
            lose();
            image();
        }
    }
}


//Condition de victoire et de défaite 
function win() {
    if (tiret === motArr) {
        document.getElementById("entUser").disabled = true;
        document.getElementById("valWord").disabled = true;
        document.getElementById("valWord").innerHTML = "Gagné !";
    }
}

function lose() {
    if (min === max) {
        document.getElementById("entUser").disabled = true;
        document.getElementById("valWord").disabled = true;
        document.getElementById("valWord").innerHTML = "Perdu !";
    }
}

//Défilement image
function image() {
    document.getElementById("pendu").src = './assets/img/' + min + '.png';
}
image();

//Mapping du mot à trouver
function mapping() {
    tiret = motArr.split('').map(index => (entree.indexOf(index) >= 0 ? index : ' _ ')).join(''); // cond ? : = if cond elsif
    document.getElementById("motTrouv").innerHTML = tiret;

}
mapping();

// démarrer une nouvelle partie au clique du bouton
document.getElementById("nouv").addEventListener("click", () => {
    location.reload();
});