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
  if (document.querySelector(".modalOutput").style.display == "grid") {
    document.querySelector(".modalOutput").style.display = "none";
    document.getElementById("form").style.display = "inline";
    let inputs = document.getElementsByTagName("input");

    for (let input of inputs) {
      console.log(input.className);
      if (input.className != "btn-submit" && input.id != "checkbox1") {
        input.value = "";
      }

      if (input.checked && input.name == "location") {
        input.checked = false;
      }
    }
  }
}
