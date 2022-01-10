function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        
        const photographerCard = 
             `
            <img src="${picture}">
                <a class="photographClick" href="photographer.html?id=${id}">
                    <h2>${name}</h2>
                </a>
                <h3>${city}, ${country}</h3>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
            `
        article.innerHTML = photographerCard;
        
        return (article);
        
        
    }
    return { name, picture, id, getUserCardDOM }
    
}


const queryString = window.location.search;
const idValue = new URLSearchParams(queryString).get('id');
console.log(idValue)

function mediaFactory(data) {
    const {title, image, likes, date} = data;
    
    //manque a faire liaison avec id

    const picture = `assets/media/${idValue}/${image}`;


    function getUserProfileDOM() {
        const section = document.createElement( 'section' );
        const mediaProfile = 
             `
            <img src="${picture}">
                <h4>${title}</h2>
                <p>${likes} <3</p>
            `
        section.innerHTML = mediaProfile;
        return (section);

    }
    
    return { title, image, getUserProfileDOM }
}


