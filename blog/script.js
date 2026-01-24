const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobMenu = document.querySelector(".mob-menu");
const overlay = document.querySelector(".overlay");
const main = document.querySelector("main")

function openMenu(){
    overlay.style.display = "block";
    mobMenu.style.left = 0;
    overlay.style.opacity = 1;
}

function closeMenu(){
    overlay.style.display = "none";
    overlay.style.opacity = 0;
    mobMenu.style.left = "-600px";
}

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu)
main.addEventListener("click", closeMenu)
