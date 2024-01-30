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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseButton = document.querySelectorAll(".close");
const validationContainer = document.querySelector(".modalOutput");
const heroSection = document.querySelector(".hero-section");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseButton.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  let width = window.innerWidth;
  if (width < 768) {
    heroSection.style.display = "none";
  }
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  let width = window.innerWidth;
  if (width < 768) {
    heroSection.style.display = "block";
  }
}
