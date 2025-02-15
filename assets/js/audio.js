<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const toggleBtn = document.getElementById("toggle-music");

    // Réduit le volume à 10% pour un son discret
    music.volume = 0.1;

    toggleBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
    
        }
    });
=======
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const toggleBtn = document.getElementById("toggle-music");

    // Réduit le volume à 10% pour un son discret
    music.volume = 0.1;

    toggleBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
    
        }
    });
>>>>>>> 8658840d4102928338975d4e9649e8402f8946df
});