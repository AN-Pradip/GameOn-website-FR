// DOM Elements
const inputIds = ["first", "last", "email", "quantity", "birthdate"];
const submitButton = document.querySelector(".btn-submit");
const form = document.getElementById("form");
const modalbackground = document.querySelector(".bground");
const termsAndConditions = document.getElementById("checkbox1");

// Button click event
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let validationInputs = checkInput();
  let validationRadio = checkRadioButton();
  if (validationInputs == true) {
    if (validationRadio == true) {
      if (termsAndConditions.checked == true) {
        displayValidationMessage(
          document.querySelector(".modalOutput"),
          document.querySelector(".modalOutput-text")
        );
      } else {
        confirm(displayIncorrectValueMessage("condition"));
      }
    } else {
      confirm(displayIncorrectValueMessage("radio"));
    }
  } else {
    confirm(displayIncorrectValueMessage(validationInputs));
  }
});

// Check inputs
function checkInput() {
  let output = true;
  inputIds.forEach((element) => {
    if (!document.getElementById(element).value) {
      output = element.id;
    }
  });
  return output;
}

// Check radio buttons
function checkRadioButton() {
  let checkRadio = document.querySelector("input[type=radio]:checked");
  if (checkRadio != null) {
    return true;
  } else {
    return false;
  }
}

// Display validation message
function displayValidationMessage(validationContainer, validationMessage) {
  validationContainer.style.display = "grid";
  validationMessage.style.display = "block";
  form.style.display = "none";
  let newButton = document.createElement("button");
  newButton.value = "Fermer";
  newButton.textContent = "Fermer";
  newButton.className = "button modalOutput-button";
  validationContainer.appendChild(newButton);
  newButton.addEventListener("click", closeModal);
}

//Message chooser function
function displayIncorrectValueMessage(value) {
  switch (value) {
    case "first":
      return "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
    case "last":
      return "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    case "email":
      return "Veuillez saisir votre email";
    case "birthdate":
      return "Vous devez entrer votre date de naissance.";
    case "quantity":
      return "Veuillez saisir le nombre de tournois auxquels vous avez participez";
    case "radio":
      return "Vous devez choisir une option";
    case "condition":
      return "Vous devez vérifier que vous acceptez les termes et conditions.";
    default:
      return "erreur";
  }
}
