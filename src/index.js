import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
home();

let homeButton = document.querySelector(".home");
let menuButton = document.querySelector(".menu");
let contactButton = document.querySelector(".contact");
let content = document.querySelector("#content");
homeButton.addEventListener("click", homeClick);
menuButton.addEventListener("click", menuClick);
contactButton.addEventListener("click", contactClick);
function homeClick() {
    content.innerHTML ="";
    home();
}
function menuClick() {
    content.innerHTML ="";
    menu();
}
function contactClick() {
    content.innerHTML ="";
    contact();
}
