const sideMenu = document.querySelector(".header__side-menu")
const sideVoid = sideMenu.querySelector(".header__side-menu__side-void")
// SHOW SIDE MENU
document.querySelector(".fa-bars").addEventListener("click", () => {
    sideMenu.style.animation = "show-side-menu 0.3s ease-out forwards"
    sideVoid.style.animation = "become-opaque 0.125s ease-out 0.3s forwards"
})
// HIDE SIDE MENU
sideVoid.addEventListener("click", event => {
    sideMenu.style.animation = "hide-side-menu 0.3s ease-in forwards"
    event.target.style.animation = "become-transparent 0.01s ease-out forwards"
})
