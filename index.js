const boton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-mobile");

if (boton && menu) {
    boton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
