import { starships } from "../Assets/starships.js"


starships.forEach(starship => {
    let starshipDiv = document.createElement("div")
    let name = document.createElement("h1")
    let model = document.createElement("p")
    let cost = document.createElement("p")
    let hyperdrive = document.createElement("p")
    let pic = document.createElement("img")

    let charNum = getCharNumber(starship.url)
    pic.setAttribute("class", "images")
    starshipDiv.setAttribute("class", "card")

    name.textContent = starship.name
    model.textContent = `Model: ${starship.model}`
    cost.textContent = `Cost: ${starship.cost_in_credits} credits`
    hyperdrive.textContent = `Hyperdrive Rating: ${starship.hyperdrive_rating}`
    pic.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`

    starshipDiv.appendChild(name)
    starshipDiv.appendChild(pic)
    starshipDiv.appendChild(model)
    starshipDiv.appendChild(cost)
    starshipDiv.appendChild(hyperdrive)

    mainArea.appendChild(starshipDiv)

    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './assets/images/Star_Wars_Logo.png'
    })

})

function getCharNumber(starships.url) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID