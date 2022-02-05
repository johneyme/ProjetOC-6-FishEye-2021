// FUNCTION AFFICHAGE PHOTOGRAPH DANS INDEX ------------

function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const photographerCard = `
            <img alt='photo de ${name}' src="${picture}">
                <a class="photographClick" href="photographer.html?id=${id}">
                    <h2>${name}</h2>
                </a>
                <h3>${city}, ${country}</h3>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
            `;
    article.innerHTML = photographerCard;

    return article;
  }
  return { name, picture, getUserCardDOM };
}

// FONCTION AFFICHAGE MEDIA DU PHOTOGRAPH ---------------

function mediaFactory(data) {
  const { title, image, likes, video } = data;

  const picture = `assets/media/${idValue}/${image}`;
  const movie = `assets/media/${idValue}/${video}`;

  // faire fonction getuservideo

  function getUserProfileDOM() {
    const section = document.createElement("section");
    section.setAttribute("id", "single-media");
    const mediaProfile = `
              <img class="source-media" alt='${title}' src="${picture} ">
            <div class="single-media-info">
                <h4>${title}</h4>
                <p class="nb-of-likes">${likes} <i class="fas fa-heart"></i></p>
            </div>
                `;
    const videoProfile = `
            <video  alt='${title}' >
    <source class="source-media"  src="${movie}">
            </video>
            <div class="single-media-info">
                <h4>${title}</h4>
                <p>${likes} <i class="fas fa-heart"></i></p>
                </div>
             `;
    if (image) {
      section.innerHTML = mediaProfile;
    } else if (video) {
      section.innerHTML = videoProfile;
    }
    return section;
  }

  return { title, picture, getUserProfileDOM };
}

//FONCTION AFFICHAGE DU PROFIL PHOTOGRAPH --------------

function profileFactory(data) {
  const { name, portrait, city, country, tagline } = data;

  const picture = `assets/photographers/${portrait}`;

  function getProfileDOM() {
    const section = document.createElement("section");
    section.setAttribute("class", "photograph-header");
    const profile = `
             <div class="information-profile">
             <h2>${name}</h2>
              <h3>${city}, ${country}</h3>
              <p class="tagline">${tagline}</p>
                </div>
              <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
              <img alt="photo de ${name}" src="${picture}"></img>
            `;
    section.innerHTML = profile;
    return section;
  }

  return { name, picture, getProfileDOM };
}

// SEARCH ID SUR URL

const queryString = window.location.search;
const idValue = new URLSearchParams(queryString).get("id");

