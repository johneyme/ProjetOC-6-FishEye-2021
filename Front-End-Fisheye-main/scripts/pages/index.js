// Fetch use to API connect 
/*const api = "./data/photographers.json";

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => displayData(data.photographers));
  */



// FONCTION QUI AFFICHE TOUS LES PHOTOGRAPHES

async function displayData(photographers) {
  console.log(photographers);

  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

//// This code use a mock data to github pages works
// The right use is fetch fonction
displayData(photographersData.photographers)
