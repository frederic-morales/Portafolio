const asideMobileMenu = document.querySelector(".header-aside-mobile");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const xIcon = document.querySelector("#x-icon");
const body = document.querySelector("#body");

hamburgerIcon.addEventListener("click", mobileMenu);
xIcon.addEventListener("click", mobileMenu);
body.addEventListener("click", closedMenu)

function mobileMenu(){
    const isMobileMenuOpen = asideMobileMenu.classList.contains("active");
    if(isMobileMenuOpen){
        asideMobileMenu.classList.remove("active");
        console.log("hola");
    } else if (!isMobileMenuOpen){
        asideMobileMenu.classList.add("active");
    }
}