//Je veux associer un pays à son diminutif

const pays = [
    ['france', 'fr'],['belgique', 'be'],['italie','it'],['afghanistan','af']
];
const form = document.querySelector('.quizz-drapeau');
let proposition = [];
let choixPays = numeroAleatoire(4);
let convertionReponse = pays[choixPays][0];


console.log(choixPays);
console.log(convertionReponse);

//J'affiche un drapeau random

let drapeau = document.getElementById('drapeau');
drapeau.setAttribute('src', `https://www.countryflags.io/${pays[choixPays][1]}/flat/64.png`);

function numeroAleatoire(max) {
    return Math.floor(Math.random() * max);
  }


  //console.log(drapeau);
  //Je compare l'entrée de l'utilisateur avec la réponse

form.addEventListener('submit', (e) => {
    e.preventDefault();
    proposition = [document.getElementById('reponse').value];
    //proposition.toString();
    console.log(proposition);

    
    //si l'entrée de l'utilisateur correspond au diminutif du bon pays: animation bien

    if (proposition == convertionReponse) {
        console.log("nice");
    }//sinon: animation raté
     else {
        console.log("wrong");
    }
})


//nouveau drapeau

