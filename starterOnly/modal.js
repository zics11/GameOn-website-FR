
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
  if (screen.width < 1050) {
    heroSec.style.visibility = "hidden";
    modalbg.style.display = "block";
    heroSec.style.height = "0px";
  }
  else {
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
  document.reserve.reset();
  domAllError.forEach(suprimerErreur);
}

//Cofirm message//

submitBtn[0].addEventListener("click", cofirmMessage)

function cofirmMessage(event) {
  event.preventDefault()

  // vérifie que tous les entrées du fomulaire sont valident //
  if (validateFirst() && validateLast() && validateEmail() && validateDate() && validateQuantity() && validateRadio() && validateCheckbox()){
    console.log("ok");
    confirmSec.style.display = "block";
    reservSec.style.display = "none";
  }
}

// VALIDATION FORMULAIRE//
// DOM : //
const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");
const inputEmail = document.querySelector("#email");
const inputDate = document.querySelector("#birthdate");
const inputQuantity = document.querySelector("#quantity");
const inputRadio = document.querySelectorAll('[type="radio"]');
const domRadio = document.querySelectorAll(".checkbox-label");
const inputCheckbox = document.querySelector("#checkbox1");
const domCheckbox = document.querySelectorAll(".checkbox2-label");
const domAllError = [inputFirst, inputLast, inputEmail, inputDate, inputQuantity, domRadio[5], domCheckbox[1]];
const listFonctionValidation = [ validateFirst, validateLast, validateEmail, validateDate, validateQuantity, validateRadio, validateCheckbox]

//liste message
const message = {
  first: "Veuillez entrer 2 caractères valide ou plus pour le champ du prénom.",
  last: "Veuillez entrer 2 caractères valide ou plus pour le champ du nom.",
  email: "Veuillez entrer un email valide.",
  date: "Veuillez entrer une date de naissance.",
  quantity: "Veuillez entrer un nombre.",
  radio: "Vous devez choisir une option.",
  checkbox: "Vous devez acceptez les termes et conditions.",
}

//Valide  prénom//
submitBtn[0].addEventListener("click", validateFirst);

function validateFirst() {
  let inputLenght = inputFirst.value.length;
  if (inputLenght < 2) {
    afficherErreur(inputFirst, message.first);
    return false
  } else {
    suprimerErreur(inputFirst);
    return true
  }
}

//Valider nom//
submitBtn[0].addEventListener("click", validateLast);

function validateLast() {
  let inputLenght = inputLast.value.length;
  if (inputLenght < 2) {
    afficherErreur(inputLast, message.last);
    return false
  } else {
    suprimerErreur(inputLast);
    return true
  }

}

//Valider email//
submitBtn[0].addEventListener("click", validateEmail);

function validateEmail() {
  let inputValue = inputEmail.value
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(inputValue)) {
    afficherErreur(inputEmail, message.email);
    return false
  } else {
    suprimerErreur(inputEmail);
    return true
  }

}

//Valider date//
submitBtn[0].addEventListener("click", validateDate);

function validateDate() {
  if (!inputDate.value) {
    afficherErreur(inputDate, message.date);
    return false
  } else {
    suprimerErreur(inputDate);
    return true
  }
}

//Valider tounois//
submitBtn[0].addEventListener("click", validateQuantity);

function validateQuantity() {
  let regex = /[0-9]+$/;
  if (!inputQuantity.value || !regex.test(inputQuantity.value)) {
    afficherErreur(inputQuantity, message.quantity);
    return false
  } else {
    suprimerErreur(inputQuantity);
    return true
  }
}

//valider radio//
submitBtn[0].addEventListener("click", validateRadio);

function validateRadio() {
  let error = true;
  inputRadio.forEach(item => {
    if (item.checked) {
      error = false;
    }
  });
  if (error) {
    afficherErreur(domRadio[5], message.radio);
    return false
  } else {
    suprimerErreur(domRadio[5]);
    return true
  }
}

//valider checkbox//
submitBtn[0].addEventListener("click", validateCheckbox);

function validateCheckbox() {
  if (!inputCheckbox.checked) {
    afficherErreur(domCheckbox[1], message.checkbox);
    return false
  } else {
    suprimerErreur(domCheckbox[1]);
    return true
  }
}

// Afficher erreur//
// fonction qui affiche un méssage d'érreu personalisé suivant l'entrée du formulaire//
function afficherErreur(inputDom, msg) {
  let parentDiv = inputDom.parentNode
  if (!parentDiv.querySelector('p')) {
    let newDiv = document.createElement("p");
    let messageError = document.createTextNode(msg);
    newDiv.appendChild(messageError);
    newDiv.style.fontSize = "12px";
    newDiv.style.color = "orange";
    newDiv.style.paddingBottom = "0px";
    // newDiv.style.position = "absolute";
    parentDiv.insertBefore(newDiv, inputDom.nextSibling);
  }
}

//Suprimmer erreur//
// fonction qui suprime le méssage d'érreur personalisé suivant l'entrée du formulaire quant celui ci est corrigé//
function suprimerErreur(inputDom) {
  let parentDiv = inputDom.parentElement;
  if (parentDiv.querySelector('p')) {
    let newDiv = parentDiv.querySelector('p');
    parentDiv.removeChild(newDiv);
  }
}

