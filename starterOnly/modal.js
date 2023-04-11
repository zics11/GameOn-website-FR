
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
console.log(modalbg)
const heroSec = document.querySelector(".hero-section");
const submitBtn = document.querySelectorAll(".btn-submit");
const reservSec = document.querySelector(".reserv");
const confirmSec = document.querySelector(".confirm");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  //Permet  a la modal de prendre tout l'écran en version tablette ou mobile//
  if ( screen.width < 1050 ){
    heroSec.style.visibility = "hidden";
    modalbg.style.display = "block";
    heroSec.style.height = "0px";
  }
  else{
    modalbg.style.display = "block";
  }
}

//close Modal//
closeBtn[0].addEventListener("click", closeModal);
submitBtn[1].addEventListener("click", closeModal)


function closeModal() {
  heroSec.style.visibility = "visible";
  modalbg.style.display = "none";
  confirmSec.style.display = "none";
  reservSec.style.display = "block";
  heroSec.style.height = "auto";
}

//Cofirm message//

submitBtn[0].addEventListener("click", cofirmMessage)

function cofirmMessage(event) {
  event.preventDefault()
  // confirmSec.style.display = "block";
  // reservSec.style.display = "none";
}

// VALIDATION FORMULAIRE//
// DOM : //
const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");

//liste message
const message = {
  first: "Veuillez entrer 2 caractères valide ou plus pour le champ du prénom.",
  last: "Veuillez entrer 2 caractères valide ou plus pour le champ du nom.",
}
//Valider prénom//
submitBtn[0].addEventListener("click", validateFirst);

function validateFirst() {
  let inputLenght = inputFirst.value.length;
  let inputValue = inputFirst.value
  let regex = /[a-zA-Z]+$/;
  if(inputLenght<2 || !regex.test(inputValue)) {
    afficherErreur(inputFirst,message.first)
  }
  else {
    suprimerErreur(inputFirst)
  }
}

//Valider nom//
submitBtn[0].addEventListener("click", validateLast);

function validateLast() {
  let inputLenght = inputLast.value.length;
  let inputValue = inputLast.value
  let regex = /[a-zA-Z]+$/;
  if(inputLenght<2 || !regex.test(inputValue)) {
    afficherErreur(inputLast,message.last)
  }
  else {
    suprimerErreur(inputLast)
  }
}


// Afficher erreur//
function afficherErreur(inputDom, msg){
  let parentDiv = inputDom.parentNode
  if(!parentDiv.querySelector(".error")){
    let newDiv = document.createElement("p");
    let messageError = document.createTextNode(msg);
    newDiv.appendChild(messageError);
    newDiv.style.fontSize = "13px";
    newDiv.style.color = "red";
    newDiv.style.position = "absolute";
    newDiv.className = "error";
    parentDiv.insertBefore(newDiv,inputDom.nextSibling);
  }
}

//Suprimmer erreur//
function suprimerErreur(inputDom) {
  let parentDiv = inputDom.parentNode;
  let newDiv = document.querySelector(".error")
  let delDiv = parentDiv.removeChild(newDiv)
}

