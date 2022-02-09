function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const sendForm = document.querySelector(".contact_button")

sendForm.addEventListener('click', (e) => {
  e.preventDefault()
  const prenom = document.querySelector('#prenom');
  const nom = document.querySelector('#nom');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const modal = document.getElementById("contact_modal");
  console.log(`Prenom : ${prenom.value}/ Nom : ${nom.value}/ Email : ${email.value}/ Message : ${message.value} `)
  modal.style.display = "none";
})



