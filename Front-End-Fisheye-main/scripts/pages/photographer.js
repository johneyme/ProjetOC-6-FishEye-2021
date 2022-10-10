// Fetch use to API connect 
/*
const api = "./data/photographers.json";

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayProfile(data.photographers);
    displayData(data.media);
    lightbox();
    lightboxController();
    incrementationLike();
  });
  */



// ------------------  FONCTIONS QUI AFFICHE LES INFOS DU PHOTOGRAPHES -------------

async function displayProfile(photographers) {
  const profileSection = document.querySelector(".photograph-profile");
  const spanPrice = document.querySelector(".span-price-aside");
  const spanNameForm = document.querySelector(".span-name-form");

  //// To fetch use uncomment line 35 and comment line 36
  // photographers.forEach((photographer) => {
  photographersData.photographers.forEach((photographer) => {
    if (photographer.id == idValue) {
      const profileModel = profileFactory(photographer);
      const profileCardDOM = profileModel.getProfileDOM();
      profileSection.appendChild(profileCardDOM);
      spanPrice.innerHTML = photographer.price;
      spanNameForm.innerHTML = photographer.name;
    }
  });
}

// ----------------- FONCTIONS LES MEDIAS DU PHOTOGRAPH -----------------------------------

async function displayData(medias) {
  const mediasSection = document.querySelector(".media_section");
  const spanCountLike = document.querySelector(".span-count-like");
  const orderbySelect = document.querySelector("#orderby");

  let count = 0;
  let mediaArray = [];

  medias.forEach((media) => {
    if (media.photographerId == idValue) {
      mediaArray.push(media);
    }
  });

  // ----------------- SYSTEME DE TRI ------------------------

  orderbySelect.addEventListener("change", function () {
    // Tri par Likes
    if (this.value == "likes") {
      mediaArray.sort(function (a, b) {
        return a.likes - b.likes;
      });
      mediasSection.innerHTML = "";
      count = 0;
      affichageMedia();
      mediaLoading = [];
      lightbox();
      incrementationLike();
      spanCountLike.innerHTML = count;
      globalLike();

      // Tri par date  
    } else if (this.value == "date") {
      mediaArray.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      mediasSection.innerHTML = "";
      count = 0;
      affichageMedia();
      mediaLoading = [];
      lightbox();
      incrementationLike();
      spanCountLike.innerHTML = count;
      globalLike();
      // Tri par alphabétique 
    } else if (this.value == "alphabetique") {
      mediaArray.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
      });
      mediasSection.innerHTML = "";
      count = 0;
      affichageMedia();
      mediaLoading = [];
      lightbox();
      incrementationLike()
      spanCountLike.innerHTML = count;
      globalLike();
    }
  });

  mediaArray.sort(function (a, b) {
    return a.likes - b.likes;
  });
  affichageMedia();

  //  ----------------- AFFICHAGE MEDIA VIA mediaArray ---------------------

  function affichageMedia() {
    mediaArray.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const userCardDOM = mediaModel.getUserProfileDOM();
      mediasSection.appendChild(userCardDOM);
      count += media.likes;
    });
  }

  spanCountLike.innerHTML = count;

  function globalLike() {

    const likesClick = document.querySelectorAll("div.likes-click");
    likesClick.forEach((link) => {
      link.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          count++;
          spanCountLike.innerHTML = count;
        }
      });
      link.addEventListener("click", (e) => {
        count++;
        spanCountLike.innerHTML = count;
      });
    });
  }

  globalLike()
}

// --------------------- LIGHTBOX ----------------------------

let url = null;
let indexMedia = 0;
let mediaLoading = [];

// AFFICHAGE LIGHTBOX

function lightbox() {
  const mediaSelector = document.querySelectorAll(".source-media");
  const lightboxSelector = document.querySelector(".lightbox");
  const lightboxSrc = document.querySelector(".lightbox-img");
  const lightboxVideo = document.querySelector(".lightbox-video");


  //// To fetch use uncomment line 35 and comment line 36
  //mediaSelector.forEach((source) => {
  mediaSelector.forEach((source) => {
    mediaLoading.push(source.getAttribute("src"));
  });


  mediaSelector.forEach((link) => {
    let srcLink = link.getAttribute("src");
    if (srcLink.includes(".jpg")) {
      link.addEventListener("click", (e) => {
        lightboxSelector.style.display = "block";
        lightboxSrc.style.display = "block";
        lightboxSrc.setAttribute("src", srcLink);
        lightboxVideo.style.display = "none";
        indexMedia = mediaLoading.indexOf(srcLink);
      });
    } else {
      link.parentNode.addEventListener("click", (e) => {
        lightboxSelector.style.display = "block";
        lightboxSrc.style.display = "none";
        lightboxVideo.style.display = "block";
        let sourceVideo = document.createElement("source")
        sourceVideo.classList.add("source-video")
        sourceVideo.setAttribute("src", srcLink);
        let oldVideo = document.querySelector(".source-video")
        if (oldVideo) {
          oldVideo.remove()
        }
        lightboxVideo.appendChild(sourceVideo)
        indexMedia = mediaLoading.indexOf(srcLink);
      });
    }
  });
}

//  FONCTION CONTROLE DE LA LIGHTBOX

function lightboxController() {
  const lightboxSelector = document.querySelector(".lightbox");
  const lightboxSrc = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox__close");
  const lightboxNext = document.querySelector(".lightbox__next");
  const lightboxPrev = document.querySelector(".lightbox__prev");
  const lightboxVideo = document.querySelector(".lightbox-video");
  const sourceVideo = document.querySelector(".source-video");

  // -------- Utils Function to Lightbox Controller ---------------------

  function conditionNextPrev() {
    if (mediaLoading[indexMedia].includes(".jpg")) {
      lightboxSelector.style.display = "block";
      lightboxSrc.style.display = "block";
      lightboxSrc.setAttribute("src", mediaLoading[indexMedia]);
      lightboxVideo.style.display = "none";
    } else if (mediaLoading[indexMedia].includes(".mp4")) {
      lightboxSelector.style.display = "block";
      lightboxSrc.style.display = "none";
      lightboxVideo.style.display = "block";
      let sourceVideo = document.createElement("source")
      sourceVideo.classList.add("source-video")
      sourceVideo.setAttribute("src", mediaLoading[indexMedia]);
      let oldVideo = document.querySelector(".source-video")
      if (oldVideo) {
        oldVideo.remove()
      }
      lightboxVideo.appendChild(sourceVideo)
    }
  }

  function nextIndexMedia() {
    if (indexMedia < mediaLoading.length - 1) {
      indexMedia++;
      if (mediaLoading[indexMedia].includes(".jpg")) {
        lightboxSrc.setAttribute("src", mediaLoading[indexMedia]);
      } else if (mediaLoading[indexMedia].includes(".mp4")) {
        sourceVideo.setAttribute("src", mediaLoading[indexMedia]);
      }
    } else {
      indexMedia = 0;
      if (mediaLoading[indexMedia].includes(".jpg")) {
        lightboxSrc.setAttribute("src", mediaLoading[indexMedia]);
      } else if (mediaLoading[indexMedia].includes(".mp4")) {
        sourceVideo.setAttribute("src", mediaLoading[indexMedia]);
      }
    }
  }

  function prevIndexMedia() {
    if (indexMedia > 0) {
      indexMedia--;
      if (mediaLoading[indexMedia].includes(".jpg")) {
        lightboxSrc.setAttribute("src", mediaLoading[indexMedia]);
      } else if (mediaLoading[indexMedia].includes(".mp4")) {
        sourceVideo.setAttribute("src", mediaLoading[indexMedia]);
      }
    } else {
      indexMedia = mediaLoading.length - 1;
      if (mediaLoading[indexMedia].includes(".jpg")) {
        lightboxSrc.setAttribute("src", mediaLoading[indexMedia]);
      } else if (mediaLoading[indexMedia].includes(".mp4")) {
        sourceVideo.setAttribute("src", mediaLoading[indexMedia]);
      }
    }
  }
  // -------------------------------------------------------------

  // Fleche suivante Lightbox
  lightboxNext.addEventListener("click", function (e) {
    e.preventDefault();
    nextIndexMedia();
    conditionNextPrev();
  });

  // Fleche précédent Lightbox

  lightboxPrev.addEventListener("click", function (e) {
    e.preventDefault();
    prevIndexMedia();
    conditionNextPrev();
  });

  // Fermeture Ligthbox
  lightboxClose.addEventListener("click", function () {
    lightboxSelector.style.display = "none";
  });

  // Controller Lightbox clavier

  window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
      prevIndexMedia();
      conditionNextPrev();
    }
    if (event.key === "ArrowRight") {
      nextIndexMedia();
      conditionNextPrev();
    }

    if (event.key === "Escape") {
      lightboxSelector.style.display = "none";
    }
  });
}

// FONCTION INCREMENTATION LIKES MEDIA

function incrementationLike() {
  const likesClick = document.querySelectorAll("div.likes-click");
  likesClick.forEach((link) => {
    link.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        let likesCount = link.querySelector(".likes-count");
        let likesContent = link.innerText;
        likesContent++;
        likesCount.innerHTML = likesContent;
      }
    });
    link.addEventListener("click", (e) => {
      let likesCount = link.querySelector(".likes-count");
      let likesContent = link.innerText;
      likesContent++;
      likesCount.innerHTML = likesContent;
    });
  });
}

//// This code use a mock data to github pages works
// The right use is fetch fonction
console.log(photographersData)
displayProfile(photographersData);
displayData(photographersData.media);
lightbox();
lightboxController();
incrementationLike();
