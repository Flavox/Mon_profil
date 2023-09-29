const cafe = document.querySelector(".cafe")
cafe.addEventListener("click", () => {
   cafe.innerText = " 🍺 ho !"
})

const etvous = document.querySelector(".etvous")
etvous.addEventListener("click", () => {
   etvous.innerText = " Mais vous aussi je suis sur ;)"
})


// let btn = document.querySelector("#projets");
// console.log(btn.innerText)

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    btn.innerText = "testé :)"
})

const cntxt = document.querySelector(".contextmenu")
cntxt.addEventListener("contextmenu", () => {
    cntxt.style.backgroundColor = "#fefae0"
})
const ifchange = document.querySelector(".ifchange")
cntxt.addEventListener("contextmenu", () => {
    ifchange.style.fill = "#fefae0"
})
//Si on ouvre le menu contextuelle, cela changera également la couleur de la flèche en bas à droite.
//Je me demande s'il n'est pas possible de faire autrement pour ifchange, avec une condition :
//Si cntxt est utilisé (true), changer la couleur de style de ifchange par "#fefae0"




// const focus = document.querySelector(".focus")
// focus.addEventListener("focus", () => {
//     focus.style.textalign = "right"
// })

const lovesong = document.querySelector(".lovesong")
lovesong.addEventListener("click", () => {
    lovesong = window.open("https://www.youtube.com/watch?v=BT4GIljqr-A", "_blank")
})

const wheel = document.querySelector(".wheel")
wheel.addEventListener("wheel", () => {
    wheel.style.color = "#dda15e"
})

const toop = document.querySelector("#top")
toop.addEventListener("click", () => {
    window.scrollTo({top: 0,
    left: 0,
behavior: "smooth",})
})

// pour le scroll #dda15e
// pour le wheel #606c38