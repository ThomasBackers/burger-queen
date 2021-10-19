// SHOW SIDE MENU
document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".header__side-menu").style.transform = "translateX(100%)";
});
// HIDE SIDE MENU
document.querySelector(".header__side-menu__side-void").addEventListener("click", () => {
    document.querySelector(".header__side-menu").style.transform = "";
});
