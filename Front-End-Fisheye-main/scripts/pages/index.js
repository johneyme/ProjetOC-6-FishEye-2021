const api = "./data/photographers.json"

fetch(api)
.then(response => {
   return response.json();
})
.then(data => displayData(data.photographers));

    async function displayData(photographers) {
        console.log(photographers)
        const photographersSection = document.querySelector(".photographer_section");
        
        

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
            
           
            
        });
    };




    