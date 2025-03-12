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

    function competenceCercle(elementCercle) {
        
        const colors = JSON.parse(elementCercle.getAttribute("data-colors"));
        const percents = JSON.parse(elementCercle.getAttribute("data-percents"));

        let box = document.createElement("div");
        box.style.position = "relative"
        box.style.width = "160px";
        box.style.height = "100px";

        for (let i = 0; i < colors.length; i++) {
            let cercle = document.createElement("div");
            cercle.classList.add("outer");
            cercle.style.background = `linear-gradient(90deg, ${colors[i]} 0% ${percents[i]}, transparent ${percents[i]} 100%)`;
            box.appendChild(cercle);
        }

        let inner = document.createElement("div");
        inner.classList.add("inner");
        box.lastElementChild.appendChild(inner);

        elementCercle.appendChild(box);
    };

    document.querySelectorAll(".cercle").forEach(element => {
        competenceCercle(element)
    });

    let i = 0
    let color = ["#130d31"]
    document.querySelectorAll('.techniques .swiper-slide .block').forEach(element => {
        element.style.background = color[0]
        i = i + 1
        if (i >= 4){
            i = 0
        }
    })

    document.querySelectorAll('.soft .swiper-slide .block').forEach(element => {
        element.style.background = color[0]
        i = i + 1
        if (i >= 4){
            i = 0
        }
    })
})

