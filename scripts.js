const cafe = document.querySelector(".cafe")
cafe.addEventListener("click", () => {
   cafe.innerText = " 🍺 ho !"
})

let etvous = document.querySelector(".etvous")
etvous.addEventListener("click", () => {
   etvous.innerText = " Mais vous aussi je suis sur ;)"
})


// let btn = document.querySelector("#projets");
// console.log(btn.innerText)


btn.addEventListener("click", () => {
    btn.innerText = "testé :)"
})

const cntxt = document.querySelector(".contextmenu")
cntxt.addEventListener("contextmenu", () => {
    cntxt.style.backgroundColor = "#fefae0"
})

const focus = document.querySelector(".focus")
focus.addEventListener("focus", () => {
    focus.style.textalign = "right"
})

var musique
function openrequestedpopup() {
    musique = window.open("https://www.youtube.com/watch?v=BT4GIljqr-A", "_blank")
} 

const lovesong = document.querySelector(".lovesong")
lovesong.addEventListener("click", () => {
    lovesong = musique
})

const wheel = document.querySelector(".wheel")
wheel.addEventListener("wheel", () => {
    wheel.style.color = "#dda15e"
})

// pour le scroll #dda15e
// pour le wheel #606c38