// let alpha = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
let list = ["cheval", "rouler", "moderne", "neige", "orange", "ordinateur", "potiron", "ours", "pays", " pizza", "classe", "formation", "hamburger", "sauce"];
let gallery = ["./assets/img/P1.png", "./assets/img/P2.png", "./assets/img/P3.png", "./assets/img/P4.png", "./assets/img/P5.png", "./assets/img/P6.png", "./assets/img/P7.png", ];
let array = [];
let motArr = '';
let tiret = [];
let entree = [];
let tiretAff = ' ';
// -------------------------------------------------------------------------------
/* choisir un mot au hasard dans "list", le mettre dans une nouvelle table 
    en faisant un split du mot et ainsi détecter sa longueur*/

//générer un index random pour parcourir "list"
function randomWord() {
    motArr = list[Math.floor(Math.random() * list.length)];
}
let motArrSplt = randomWord.split('');
array.forEach(function(element) {
    // tiret.innerHTML("_");
});
// -------------------------------------------------------------------------------

/*afficher autant de "_" que de nombres de lettre du mot*/


// -------------------------------------------------------------------------------

//capter l'entée au clavier de l'utilisateur
document.getElementById("entUser").addEventListener("change", (event) => {
    let txT = event.target.value;

});
document.getElementById("valWord").addEventListener("click", () => {
    let txT = document.getElementById("entUser").value;
    entree.push(txT);
    console.log(entree);
});

// -------------------------------------------------------------------------------

/*Si la lettre entrée est bonne, l'afficher autant de fois qu'elle est présente 
dans le mot et au bon endroit*/

/*Si la lettre n'est pas présente, l'afficher dans la liste des mauvaises 
lettres, ajouter +1 au compteur d'essais (7 fois max) et passer à l'image suivante*/

/*Si l'utilisateur ne trouve pas le mot, lui dire qu'il a perdu et arrêter le jeu*/


// démarrer une nouvelle partie au clique du bouton
document.getElementById("nouv").addEventListener("click", () => {
    location.reload();
});




/*
function aleaNumber(min,max){ 
    let alea = min + Math.floor(Math.round(Math.random() * (max-min)) * 100)/100; return alea; 
}
*/