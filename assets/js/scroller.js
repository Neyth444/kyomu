document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le saut instantané

            let targetID = this.getAttribute("href");
            let targetElement = document.querySelector(targetID);

            if (targetElement) {
                let headerHeight = document.querySelector("header").offsetHeight;
                let targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});