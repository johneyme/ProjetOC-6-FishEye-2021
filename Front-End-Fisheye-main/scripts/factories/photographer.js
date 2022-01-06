function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const photographerCard = 
             `
            <img src="${picture}">
                <h2>${name}</h2>
                <h3>${city}, ${country}</h3>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
            `
        article.innerHTML = photographerCard;
        return (article);

    }
    return { name, picture, getUserCardDOM }
}


