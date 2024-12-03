
const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")
const letters = document.getElementById("Letters")
const numbers = document.getElementById("Numbers")
const lettersPage = document.getElementById("letters-page")
const numbersPage = document.getElementById("numbers-page")

menuButton.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block" })

letters.addEventListener("click", (e) => {
    e.preventDefault()
   
    lettersPage.classList.add("active")
    numbersPage.classList.remove("active")

    menu.style.display = "none"
})

numbers.addEventListener("click", (e) => {
    e.preventDefault()

    numbersPage.classList.add("active")
    lettersPage.classList.remove("active")

    menu.style.display = "none"
})