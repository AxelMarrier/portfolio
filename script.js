document.addEventListener("DOMContentLoaded", function () {

    AOS.init();

    const header = document.querySelector('header');
    const section = document.querySelector('section.hero');
    const container = document.querySelector('section.hero .container');

    if (header && section && container) {
        let hauteur = header.offsetHeight;
        
        // Corrige l'affectation des styles
        container.style.height = `calc(100vh - ${hauteur}px)`;
        section.style.paddingTop = `${hauteur}px`;
    }

    // Gestion du scroll
    document.addEventListener("scroll", function () {
        const headerContainer = document.querySelector("header .container");

        if (headerContainer) {
            if (window.scrollY >= 1) {
                headerContainer.classList.add("scrolled");
            } else {
                headerContainer.classList.remove("scrolled");
            }
        } else {
            console.error("header .container introuvable !");
        }
    });
})

