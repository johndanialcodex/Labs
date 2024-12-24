

const main = () => {
    
    document.getElementById("grow-me").classList.add("big")
    document.getElementById("shrink-me").classList.remove("big")

    const listItems = document.querySelectorAll("ol li");
    listItems.forEach(item => console.log(item.textContent));

    const link = document.querySelector(".link")
    link.href = "https://www.apple.com"
    link.textContent = "somewhere"


    document.getElementById("hide-me").style.display = "none"
    document.getElementById("show-me").style.display = "block"

    const nameInPut = document.getElementById("name").value
    document.querySelector("h1").textContent = `welcome ${nameInPut}`
}