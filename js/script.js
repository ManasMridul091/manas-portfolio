// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Dark Mode Toggle with Persistence
const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme",
        document.body.classList.contains("light-mode") ? "light" : "dark");
});

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}

// Typing Effect
const typingText = document.querySelector(".typing");
const words = ["Full Stack Developer", "Embedded Systems Enthusiast", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type(){
currentWord = words[wordIndex];

if(!isDeleting){
typingText.textContent = currentWord.slice(0, ++charIndex);
if(charIndex === currentWord.length){
isDeleting = true;
setTimeout(type,1000);
return;
}
}else{
typingText.textContent = currentWord.slice(0, --charIndex);
if(charIndex === 0){
isDeleting = false;
wordIndex = (wordIndex+1) % words.length;
}
}
setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll Reveal
window.addEventListener("scroll", ()=>{
document.querySelectorAll(".reveal").forEach(el=>{
const windowHeight = window.innerHeight;
const revealTop = el.getBoundingClientRect().top;
if(revealTop < windowHeight - 100){
el.classList.add("active");
}
});
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name===""||email===""||message===""){
alert("Please fill all fields!");
return;
}
if(!email.includes("@")){
alert("Enter valid email!");
return;
}
alert("Message sent successfully!");
this.reset();
});
