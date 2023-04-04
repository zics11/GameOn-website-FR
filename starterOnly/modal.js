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
console.log(submitBtn)


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  console.log(screen.width);
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

function cofirmMessage() {
  confirmSec.style.display = "block";
  reservSec.style.display = "none";
}
