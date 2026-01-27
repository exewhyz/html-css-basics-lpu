const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobMenu = document.querySelector(".mob-menu");
const overlay = document.querySelector(".overlay");
const main = document.querySelector("main");

function openMenu() {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  mobMenu.style.right = 0;
}

function closeMenu() {
  overlay.style.display = "none";
  overlay.style.opacity = 0;
  mobMenu.style.right = "-100%";
}

function toggleMenu() {
  if (overlay.style.display === "none" || overlay.style.display === "") {
    openMenu();
  } else {
    closeMenu();
  }
}

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

document.addEventListener("keydown", (e) => {
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  const isModifierPressed = isMac ? e.metaKey : e.ctrlKey;

  if (isModifierPressed && e.key === "b") {
    e.preventDefault();
    toggleMenu();
  }
});