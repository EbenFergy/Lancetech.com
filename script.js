const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links")
const blurDiv = document.querySelector(".blur")
const joinBtn = document.querySelector(".join-btn")
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");


navLinks.style.maxWidth = "0vw";
blurDiv.style.maxWidth = "0vw";



const sideMenu = () => {
    if(navLinks.style.maxWidth === "0vw" && blurDiv.style.maxWidth === "0vw"){
        navLinks.style.maxWidth = "50vw";
        blurDiv.style.maxWidth = "100vw"
        joinBtn.style.border = "2px solid";
        joinBtn.style.background = "none";
        body.style.position = "fixed";
        menuBtn.style.fill = "#ffffff"
    }
    
    else{
        navLinks.style.maxWidth = "0vw";
        blurDiv.style.maxWidth = "0vw"
        joinBtn.style.border = "none";
        joinBtn.style.background = "";
        body.style.position = "";
        menuBtn.style.fill = ""
    }
}