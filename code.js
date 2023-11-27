const menu = document.getElementById("menu")
const menuIcon = document.getElementById("menu-icon")

const me = document.getElementById("item1")
const skills = document.getElementById("item2")
const projects = document.getElementById("item3")
const media = document.getElementById("item4")

menuIcon.addEventListener("click", showMenu)

me.addEventListener("click", showMenu)
skills.addEventListener("click", showMenu)
projects.addEventListener("click", showMenu)
media.addEventListener("click", showMenu)


function showMenu() {
    menu.classList.toggle("display-menu")
}