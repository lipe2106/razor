"use strict"

//Get element from HTML
let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");

//Add eventlistener
hamburger.addEventListener("click", showMenu);

//Function to show menu
function showMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}