const api = "./data/photographers.json"

fetch(api)
.then(response => {
   return response.json();
})
.then(data => displayData(data.media));

    async function displayData(medias) {
        console.log(medias)
        const mediasSection = document.querySelector(".media_section");

        medias.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const userCardDOM = mediaModel.getUserProfileDOM();
            mediasSection.appendChild(userCardDOM);
        });
    };

