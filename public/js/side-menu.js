const sideMenu = document.querySelector(".header__side-menu")
// SHOW SIDE MENU
document.querySelector(".fa-bars").addEventListener("click", () => {
    sideMenu.style.transform = "translateX(100%)"
})
// HIDE SIDE MENU
document.querySelector(".header__side-menu__side-void").addEventListener("click", () => {
    sideMenu.style.transform = ""
})
