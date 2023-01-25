"use strict"

//Get element from HTML
let likeBtn = document.getElementById("likeBtn");
let likes = document.getElementById("likes");

//Add eventlistener
likeBtn.addEventListener("click", likePage);

// Declare variable
let NoOflikes = 0;

//Function to like page
function likePage() {

    NoOflikes++;

    // Print to HTML
    likes.innerHTML = "Sidan har fått " + NoOflikes + " likes. Tack så mycket!";
}