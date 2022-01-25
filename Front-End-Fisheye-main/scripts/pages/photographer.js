const api = "./data/photographers.json";

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayProfile(data.photographers);
    displayData(data.media);
    lightbox();
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
  const orderbySelect = document.querySelector("#orderby");
  console.log(orderbySelect[1]);

  let count = 0;
  let mediaArray = [];
  console.log(mediaArray);

  medias.forEach((media) => {
    if (media.photographerId == idValue) {
      mediaArray.push(media);
    }
  });

  // SYSTEME DE TRI

  if (orderbySelect[1].selected) {
    mediaArray.sort(function (a, b) {
      return a.likes - b.likes;
    });
  }

  affichageMedia();

  // AFFICHAGE MEDIA VIA mediaArray

  function affichageMedia() {
    mediaArray.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const userCardDOM = mediaModel.getUserProfileDOM();
      mediasSection.appendChild(userCardDOM);
      count += media.likes;
    });
  }

  spanCountLike.innerHTML = count;
}

// --------------------- LIGHTBOX ----------------------------

let url = null;
let indexMedia = 0;

function lightbox() {
  const mediaSelector = document.querySelectorAll(
    '#single-media > img[src$=".jpg"], img[src$=".jpeg"]'
  );
  const lightboxSelector = document.querySelector(".lightbox");
  const lightboxSrc = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox__close");
  const lightboxNext = document.querySelector(".lightbox__next");
  const lightboxPrev = document.querySelector(".lightbox__prev");

  let mediaLoading = [];
  mediaSelector.forEach((source) => mediaLoading.push(source.currentSrc));

  // FLECHE SUIVANT LIGHTBOX
  lightboxNext.addEventListener("click", function (e) {
    e.preventDefault();
    if (indexMedia < mediaLoading.length - 1) {
      indexMedia++;
      lightboxSrc.setAttribute("src", mediaSelector[indexMedia].currentSrc);
    }
  });

  // FLECHE PRECEDENT LIGHTBOX
  lightboxPrev.addEventListener("click", function (e) {
    e.preventDefault();
    if (indexMedia > 0) {
      indexMedia--;
      lightboxSrc.setAttribute("src", mediaSelector[indexMedia].currentSrc);
    }
  });

  // FERMETURE LIGHTBOX
  lightboxClose.addEventListener("click", function () {
    lightboxSelector.style.display = "none";
  });

  // AFFICHAGE LIGHTBOX

  mediaSelector.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let srcLink = link.currentSrc;
      lightboxSelector.style.display = "block";
      lightboxSrc.setAttribute("src", srcLink);
      url = srcLink;
      indexMedia = mediaLoading.findIndex((media) => media === url);
    })
  );
}
