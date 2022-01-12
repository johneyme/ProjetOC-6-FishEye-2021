const api = "./data/photographers.json";

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayProfile(data.photographers);
    displayData(data.media);
  });

// FONCTION QUI AFFICHE LES INFOS DU PHOTOGRAPHES

async function displayProfile(photographers) {
  const profileSection = document.querySelector(".photograph-profile");
  const spanPrice = document.querySelector(".span-price-aside");
  const spanNameForm = document.querySelector(".span-name-form");

  photographers.forEach((photographer) => {
    if (photographer.id == idValue) {
      const profileModel = profileFactory(photographer);
      const profileCardDOM = profileModel.getProfileDOM();
      profileSection.appendChild(profileCardDOM);
      spanPrice.innerHTML = photographer.price;
      spanNameForm.innerHTML = photographer.name;
    }
  });
}

// FONCTION QUI AFFICHE LES MEDIAS DU PHOTOGRAPH

async function displayData(medias) {
  const mediasSection = document.querySelector(".media_section");
  const spanCountLike = document.querySelector(".span-count-like");

  const likeArray = [];

  medias.forEach((media) => {
    if (media.photographerId == idValue) {
      const mediaModel = mediaFactory(media);
      const userCardDOM = mediaModel.getUserProfileDOM();
      mediasSection.appendChild(userCardDOM);
      likeArray.push(media.likes);
    }
  });

  // FONCTION COMPTEUR DE LIKE ---------------------------

  function countLike() {
    let sumLike = 0;
    for (let i = 0; i < likeArray.length; i++) {
      sumLike += likeArray[i];
    }

    spanCountLike.innerHTML = sumLike;
  }

  countLike();

  // -------------------------------------------------------
}
