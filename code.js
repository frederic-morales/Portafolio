const asideMobileMenu = document.querySelector(".header-aside-mobile");
const hamburgerIcon = document.querySelector("#hamburger-icon");

hamburgerIcon.addEventListener("click", mobileMenu);

function mobileMenu(){
    const isMobileMenuOpen = asideMobileMenu.classList.contains("active");
    if(isMobileMenuOpen){
        asideMobileMenu.classList.remove("active");
        console.log("hola");
    } else if (!isMobileMenuOpen){
        asideMobileMenu.classList.add("active");
    }
}