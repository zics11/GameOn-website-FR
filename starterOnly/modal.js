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
const submitBtn = document.querySelector(".btn-submit");
const reservSec = document.querySelector(".reserv");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close")
console.log(submitBtn)
console.log(heroSec)


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
function closeModal() {
    heroSec.style.visibility = "visible";
    modalbg.style.display = "none";
    heroSec.style.height = "auto";
}

//Confirm Message//
submitBtn.onclick = () =>   console.log("confierm");


