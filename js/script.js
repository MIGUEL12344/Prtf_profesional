document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.createElement("img"); // Crear botón hamburguesa
    menuBtn.src = "https://miguel12344.github.io/Prtf_profesional/assets/menu.png";
    menuBtn.alt = "Menú";
    menuBtn.classList.add("menu-btn");
    document.querySelector(".header").appendChild(menuBtn); // Agregar al header

    const menuNavbar = document.querySelector(".menu-navbar");

    menuBtn.addEventListener("click", function () {
        menuNavbar.classList.toggle("active"); // Activa o desactiva el menú
    });
});
