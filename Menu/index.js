
const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")
const option1 = document.getElementById("Letters")
const option2 = document.getElementById("Numbers")
const page1 = document.getElementById("letters-page")
const page2 = document.getElementById("numbers-page")

menuButton.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block" })

    option1.addEventListener("click", (e) => {
        e.preventDefault()
   
    page1.classList.add("active")
    page2.classList.remove("active")

    menu.style.display = "none"
})

option2.addEventListener("click", (e) => {
    e.preventDefault()
    page2.classList.add("active")
    page1.classList.remove("active")

    menu.style.display = "none"
})