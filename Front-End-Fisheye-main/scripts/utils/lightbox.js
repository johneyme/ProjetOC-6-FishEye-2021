class Ligthbox {
    static init() {
        document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]').forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Ligthbox(e.currentTarget.getAttribute('href'))
        }))
    }

    /**
     * 
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */

    constructor(url){
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }

    close(e) {
        e.preventDefault();
        this.element.classList.add('fadeOut');
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        }, 500)
    }
    
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
        <img src="${url}">
        </div>
        </div>`
        dom.querySelector('.lightbox__close').addEventListener('click',this.close.bind(this))
        return dom
    }
}

/**
 * 
  <div class="lightbox">
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
        <img src="https://picsum.photos/900/1800">
      </div>
    </div>
 */

Ligthbox.init()