// FUNCTION AFFICHAGE PHOTOGRAPH DANS INDEX ------------

function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const photographerCard = `
            <img src="${picture}">
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
  const { title, image, likes, date, video } = data;

  const picture = `assets/media/${idValue}/${image}`;
  const movie = `assets/media/${idValue}/${video}`;

  // faire fonction getuservideo 
  

  function getUserProfileDOM() {
    const section = document.createElement("section");
    const mediaProfile = `
            <a href="${picture}">
              <img src="${picture}">
              </a>
            <div class="single-media-info">
                <h4>${title}</h4>
                <p class="nb-of-likes">${likes} <i class="fas fa-heart"></i></p>
            </div>
                `;
            const videoProfile = `
            <a href="${movie}">
            <video controls >
    <source src="${movie}">
            </video>
            </a>
            <div class="single-media-info">
                <h4>${title}</h4>
                <p>${likes} <i class="fas fa-heart"></i></p>
                </div>
             `;
            if(image){
              section.innerHTML = mediaProfile;
            } else if(video){
              section.innerHTML = videoProfile;
            } /*else if (!picture){
              `
                Ne rien afficher ...
            `
            }*/
    return section;
  }

  return { title, picture, getUserProfileDOM };
}

//FONCTION AFFICHAGE DU PROFIL PHOTOGRAPH --------------

function profileFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

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
              <img src="${picture}"></img>
            `;
    section.innerHTML = profile;
    return section;
  }

  return { name, picture, getProfileDOM };
}

// SEARCH ID SUR URL

const queryString = window.location.search;
const idValue = new URLSearchParams(queryString).get("id");
console.log(idValue);
