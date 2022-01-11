const api = "./data/photographers.json"

fetch(api)
.then(response => {
   return response.json();
})
.then(data => {
    displayProfile(data.photographers)
    displayData(data.media)
});


 async function displayProfile(photographers) {

     const profileSection = document.querySelector(".photograph-profile")
     const spanPrice = document.querySelector(".span-price-aside");
        
     photographers.forEach((photographer) => {
     if (photographer.id == idValue) {
        const profileModel = profileFactory(photographer)
        const profileCardDOM = profileModel.getProfileDOM()
        profileSection.appendChild(profileCardDOM)
        spanPrice.innerHTML = photographer.price
        }
    });
 }


    async function displayData(medias) {
        
        const mediasSection = document.querySelector(".media_section");
        const spanCountLike = document.querySelector(".span-count-like");
        
        const likeArray = [1,2,3,4]

        console.log(likeArray) 
        


        medias.forEach((media) => {
            if (media.photographerId == idValue) {
            const mediaModel = mediaFactory(media);
            const userCardDOM = mediaModel.getUserProfileDOM();
            mediasSection.appendChild(userCardDOM);
           // likeArray.push(media.likes)    
                   
           
           
            }
        });
    };

