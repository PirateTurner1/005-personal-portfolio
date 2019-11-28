import { species } from "../Assets/species.js"

species.forEach(spec => {
    let specDiv = document.createElement("div")
    let name = document.createElement("h1")
    let classification = document.createElement("p")
    let language = document.createElement("p")
    let pic = document.createElement("img")
    let charNum = getCharNumber(spec.url)
    pic.setAttribute("class", "images")
    specDiv.setAttribute("class", "card")

    name.textContent = spec.name
    classification.textContent = `Classification: ${spec.classification}`
    language.textContent = `Language: ${spec.language}`
    pic.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`

    specDiv.appendChild(name)
    specDiv.appendChild(pic)
    specDiv.appendChild(classification)
    specDiv.appendChild(language)

    mainArea.appendChild(specDiv)

    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './assets/images/Star_Wars_Logo.png'
    })

})

function getCharNumber(species.url) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID