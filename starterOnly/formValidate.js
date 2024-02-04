// DOM Elements
const inputIds = ["first", "last", "email", "quantity", "birthdate"];
const submitButton = document.querySelector(".btn-submit");
const form = document.getElementById("form");
const modalbackground = document.querySelector(".bground");
const termsAndConditions = document.getElementById("checkbox1");

// Button click event
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let checkOutput = checkInput();
  if (checkOutput) {
    displayValidationMessage(
      document.querySelector(".modalOutput"),
      document.querySelector(".modalOutput-text")
    );
  }
  /*
  if (validationInputs == true) {
    if (validationRadio == true) {
      if (termsAndConditions.checked == true) {
        displayValidationMessage(
          document.querySelector(".modalOutput"),
          document.querySelector(".modalOutput-text")
        );
      } else {
        confirm(incorrectValueMessage("condition"));
      }
    } else {
      confirm(incorrectValueMessage("radio"));
    }
  } else {
    confirm(incorrectValueMessage(validationInputs));
  }
  */
});

// Check inputs
function checkInput() {
  let success = true;
  let errorMessage;

  //check typed inputs
  inputIds.forEach((element) => {
    console.log("checking :" + element);
    const htmlElement = document.getElementById(element);
    let errorMessageDOM = htmlElement.nextElementSibling;
    if (!htmlElement.value || htmlElement.value.replace(/\s/g, "") == "") {
      success = false;
      console.log("problem");
      if (errorMessageDOM === null || errorMessageDOM.tagName == "BR") {
        errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        console.log("create message");
        errorMessage.textContent = incorrectValueMessage(element);
        htmlElement.insertAdjacentElement("afterend", errorMessage);
      }
    } else if (errorMessageDOM != null) {
      errorMessageDOM.remove();
    }
  });

  //check radio button
  const checkboxContainer = document.getElementById("checkboxContainer");
  let radioCheckOutput = checkRadioButton();
  errorMessageDOM = checkboxContainer.nextElementSibling;

  if (radioCheckOutput != true) {
    success = false;
    if (errorMessageDOM.tagName != "P") {
      errorMessage = document.createElement("p");
      errorMessage.className = "error-message";
      errorMessage.textContent = incorrectValueMessage(radioCheckOutput);
      checkboxContainer.insertAdjacentElement("afterend", errorMessage);
    }
  } else if (errorMessageDOM.tagName == "P") {
    checkboxContainer.nextElementSibling.remove();
  }

  //check terms and conditions
  const termsAndConditions = document.getElementById("termsAndConditions");
  const termsAndConditionsCheckbox = document.getElementById("checkbox1");

  if (termsAndConditionsCheckbox.checked != true) {
    success = false;
    if (termsAndConditions.nextElementSibling.tagName != "P") {
      errorMessage = document.createElement("p");
      errorMessage.className = "error-message";
      errorMessage.textContent = incorrectValueMessage("condition");
      termsAndConditions.insertAdjacentElement("afterend", errorMessage);
    }
  } else if (termsAndConditions.nextElementSibling.tagName == "P") {
    termsAndConditions.nextElementSibling.remove();
  }

  return success;
}

// Check radio buttons
function checkRadioButton() {
  let checkRadio = document.querySelector("input[type=radio]:checked");
  if (checkRadio != null) {
    return true;
  } else {
    return "radio";
  }
}

// Display validation message
function displayValidationMessage(validationContainer, validationMessage) {
  validationContainer.style.display = "grid";
  validationMessage.style.display = "block";
  form.style.display = "none";
  let newButton = document.createElement("button");
  newButton.id = "exitOutputModalButton";
  newButton.value = "Fermer";
  newButton.textContent = "Fermer";
  newButton.className = "button modalOutput-button";
  if (!document.getElementById(newButton.id)) {
    validationContainer.appendChild(newButton);
    newButton.addEventListener("click", closeModal);
  }
}

//Message chooser function
function incorrectValueMessage(value) {
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

function displayErrorMessage() {}
