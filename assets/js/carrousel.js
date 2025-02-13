document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".slider--item");
    const prevButton = document.querySelector(".slider--prev");
    const nextButton = document.querySelector(".slider--next");
    let currentIndex = 0;
    let isAnimating = false; // Pour empêcher le spam de clics

    function updateSlider(index, direction) {
        if (isAnimating) return; // Bloque les clics pendant l'animation
        isAnimating = true;

        const prevIndex = (index - 1 + items.length) % items.length;
        const nextIndex = (index + 1) % items.length;

        // Réinitialisation des styles
        items.forEach((item, i) => {
            item.style.transition = "transform 0.6s ease-in-out, opacity 0.4s";
            item.style.opacity = "0.5";
        });

        // Direction du mouvement
        let moveOut = direction === "next" ? "-150%" : "150%";
        let moveIn = direction === "next" ? "150%" : "-150%";

        // Animation fluide du carrousel
        items[currentIndex].style.transform = `translateX(${moveOut})`; // Sortie
        items[prevIndex].style.transform = `translateX(-100%)`;
        items[nextIndex].style.transform = `translateX(100%)`;

        setTimeout(() => {
            items.forEach((item) => {
                item.style.transition = "none"; // Supprime l'animation pour éviter les sauts
                item.style.opacity = "1";
            });

            // Réassignation correcte des classes
            items.forEach(item => item.classList.remove("slider--item-center", "slider--item-left", "slider--item-right"));
            items[prevIndex].classList.add("slider--item-left");
            items[nextIndex].classList.add("slider--item-right");
            items[index].classList.add("slider--item-center");

            // Placement final après animation
            items[prevIndex].style.transform = "translateX(-100%)";
            items[nextIndex].style.transform = "translateX(100%)";
            items[index].style.transform = "translateX(0)";

            isAnimating = false; // Débloque le clic après animation
        }, 600); // Temps identique à la transition CSS
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlider(currentIndex, "prev");
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlider(currentIndex, "next");
    });

    updateSlider(currentIndex, "next"); // Initialise l'affichage
});
