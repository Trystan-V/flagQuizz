//Je veux associer un pays à son diminutif

const pays = [
  ["france", "fr"],
  ["belgique", "be"],
  ["italie", "it"],
  ["afghanistan", "af"],
  ["grèce", "gr"],
  ["malte", "mt"],
];
const form = document.querySelector(".quizz-drapeau");
let proposition = [];
let choixPays = numeroAleatoire(6);
let convertionReponse = pays[choixPays][0];
const resultat = document.querySelector(".resultat");
const img = document.querySelector(".img-drapeau");

console.log(choixPays);
console.log(convertionReponse);

//J'affiche un drapeau random

let drapeau = document.getElementById("drapeau");
drapeau.setAttribute(
  "src",
  `https://www.countryflags.io/${pays[choixPays][1]}/flat/64.png`
);

function numeroAleatoire(max) {
  return Math.floor(Math.random() * max);
}

//console.log(drapeau);
//Je compare l'entrée de l'utilisateur avec la réponse

form.addEventListener("submit", (e) => {
  e.preventDefault();

  proposition = [document.getElementById("reponse").value];

  propositionPetiteCase = proposition.toString().toLowerCase();
  console.log(propositionPetiteCase);

  //si l'entrée de l'utilisateur correspond au diminutif du bon pays: animation bien

  if (propositionPetiteCase == convertionReponse) {
    resultat.innerText = `C'est la bonne réponse`;
    console.log("nice");
    setTimeout(rafraichir, 2000);
  } //sinon: animation raté
  else {
    img.classList.add("erreur");
    resultat.innerText = `Ce n'est pas la bonne réponse. Recommence.`;
    console.log("wrong");
    setTimeout(() => {
      img.classList.remove("erreur");
    }, 500);
  }
});

function rafraichir() {
  document.location.reload();
}

//nouveau drapeau
