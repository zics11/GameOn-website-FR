
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
const inputEmail = document.querySelector("#email");
const inputDate = document.querySelector("#birthdate");
const inputQuantity = document.querySelector("#quantity");
const inputRadio = document.querySelectorAll('[type="radio"]');
const inputCheckbox = document.querySelectorAll(']');


//liste message
const message = {
  first: "Veuillez entrer 2 caractères valide ou plus pour le champ du prénom.",
  last: "Veuillez entrer 2 caractères valide ou plus pour le champ du nom.",
  email: "Veuillez entrer un email valide.",
  date: "Veuillez entrer une date de naissance.",
  quantity: "Veuillez entrer un nombre.",
  radio : "Vous devez choisir une option.",
  radio : "Vous devez choisir une option.",

}


//Valide  prénom//
submitBtn[0].addEventListener("click", validateFirst);

function validateFirst() {
  let inputLenght = inputFirst.value.length;
  if(inputLenght<2) {
    afficherErreur(inputFirst,message.first);
  }else{
    suprimerErreur(inputFirst);
  }
}

//Valider nom//
submitBtn[0].addEventListener("click", validateLast);

function validateLast() {
  let inputLenght = inputLast.value.length;
  if(inputLenght<2) {
    afficherErreur(inputLast,message.last);
  }else{
    suprimerErreur(inputLast);
  }
}

//Valider email//
submitBtn[0].addEventListener("click", validateEmail);

function validateEmail() {
  let inputValue = inputEmail.value
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!regex.test(inputValue)) {
    afficherErreur(inputEmail,message.email);
  }else{
    suprimerErreur(inputEmail);
  }
}

//Valider date//
submitBtn[0].addEventListener("click", validateDate);

function validateDate() {
  if(!inputDate.value) {
    afficherErreur(inputDate,message.date);
  }else{
    suprimerErreur(inputDate);
  }
}

//Valider tounois//
submitBtn[0].addEventListener("click", validateQuantity);

function validateQuantity() {
  let regex = /[0-9]+$/;
  if(!inputQuantity.value || !regex.test(inputQuantity.value)) {
    afficherErreur(inputQuantity,message.quantity);
  }else{
    suprimerErreur(inputQuantity);
  }
}

//valider checkbox//
submitBtn[0].addEventListener("click", validateCheckbox);

function validateCheckbox() {
  let error = true;
  inputRadio.forEach(item => {
    if (item.checked) {
      error = false;
    }
  });
  if(error) {
    afficherErreur(inputRadio[5],message.radio);
  }else{
    suprimerErreur(inputRadio[5]);
  }
}

// Afficher erreur//
function afficherErreur(inputDom, msg){
  let parentDiv = inputDom.parentNode
  if(!parentDiv.querySelector('p')){
    let newDiv = document.createElement("p");
    let messageError = document.createTextNode(msg);
    newDiv.appendChild(messageError);
    newDiv.style.fontSize = "12px";
    newDiv.style.color = "orange";
    newDiv.style.position = "absolute";
    parentDiv.insertBefore(newDiv,inputDom.nextSibling);
  }
}

//Suprimmer erreur//
function suprimerErreur(inputDom) {
  let parentDiv = inputDom.parentElement;
  let newDiv = parentDiv.querySelector('p');
  console.log("parentd",parentDiv);
  console.log("newd",newDiv);
  parentDiv.removeChild(newDiv);
}

