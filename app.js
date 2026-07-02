const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",function(){

navLinks.classList.toggle("active");

});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

link.addEventListener("click",function(){

navLinks.classList.remove("active");

});

});