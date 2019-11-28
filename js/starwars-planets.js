import { planets } from '../assets/planets.js'

let mainArea = document.querySelector('main')

planets.forEach(planet => {
    let planetDiv = document.createElement('div')
    let planetName = document.createElement('h3')
    let planetPic = document.createElement('img')

    let planetNum = getPlanetNum(planet.url)

    planetName.textContent = planet.name
    planetPic.src = `http://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`

    //planetPic.onerror = `this.src='../images/starwarsposter.png'`
    planetPic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './Assets/images/StarwarsPoster.png' //placeholder for un-found images
    })

    planetDiv.appendChild(planetName)
    planetDiv.appendChild(planetPic)

    mainArea.appendChild(planetDiv)
})

function getCharNumber(planet.url) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID