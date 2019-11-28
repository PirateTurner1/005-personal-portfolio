import { vehicles } from "../Assets/vehicles.js"


vehicles.forEach(vehicle => {
    let vehicleDiv = document.createElement("div")
    let name = document.createElement("h1")
    let model = document.createElement("p")
    let cost = document.createElement("p")
    let speedMax = document.createElement("p")
    let pic = document.createElement("img")
    let charNum = getCharNumber(vehicle.url)
    pic.setAttribute("class", "photo")
    vehicleDiv.setAttribute("class", "card")

    name.textContent = vehicle.name
    model.textContent = `Model: ${vehicle.model}`
    cost.textContent = `Cost: ${vehicle.cost_in_credits} credits`
    speedMax.textContent = `Max Speed: ${vehicle.max_atmosphering_speed}`
    pic.src = `https://starwars-visualguide.com/assets/img/vehicles/${charNum}.jpg`

    vehicleDiv.appendChild(name)
    vehicleDiv.appendChild(pic)
    vehicleDiv.appendChild(model)
    vehicleDiv.appendChild(cost)
    vehicleDiv.appendChild(speedMax)
    mainArea.appendChild(vehicleDiv)

    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './assets/images/Star_Wars_Logo.png'
    })
})

function getCharNumber(vehicles.url) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID