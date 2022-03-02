const sendForm = document.querySelector(".contact_button");
const prenom = document.querySelector("#prenom");
const nom = document.querySelector("#nom");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contact_modal");

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  prenom.focus()
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const closeForm = document.querySelector(".close-form");
  closeForm.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      closeModal()
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      closeModal()
    }
   
  });


  function validateEmail (emailAdress)
  {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true; 
    } else {
      return false; 
    }
  }
  function validateInput(input) {
    let regexInput = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    if(input.match(regexInput)) {
      return true;
    } else {
      return false;
    }
  }

  function validate(){
    let verification = true
   

  
    if (validateInput(nom.value) === false || nom.value == 0 || nom.length <= 2 ) {
      nom.style.border = "red 3px solid";
      verification = false
    } else {
      nom.style.border = "green 3px solid"
    }
  
    if (validateInput(prenom.value) === false || prenom.value == 0 || prenom.length <= 2 ) {
      prenom.style.border = "red 3px solid"
      verification = false
    } else {
      prenom.style.border = "green 3px solid"
    }
  
    if (validateEmail(email.value) === false || email.value == 0) {
      email.style.border = "red 3px solid"
      verification = false
    } else {
      email.style.border = "green 3px solid"
    }
  
    if (message.value == 0) {
      message.style.border = "red 3px solid"
      verification = false
    } else {
      message.style.border = "green 3px solid"
    }

    if (verification === true) {
      event.preventDefault();
    sendForm.addEventListener("click", () => {
      console.log(
        `Prenom : ${prenom.value}/ Nom : ${nom.value}/ Email : ${email.value}/ Message : ${message.value} `
      );
      modal.style.display = "none";
    });
  } else {
    event.preventDefault()
    modal.style.display = "block";
  }

  }

  
  
  

