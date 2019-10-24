import { planets } from '../assets/planets.js'

let mainArea = document.querySelector('main')

planets.forEach(planet => {
    let planetDiv = document.createElement('div')
    let planetDiv = document.createElement('h3')
    let planetDiv = document.createElement('img')

    let planetNum = getPlanetNum { planet.url }
    planetName.textContent = planet.name
    planetPic.src = `http://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`

    planetPic.onerror = `this.src='../images/starwarsposter.png'`


    planetPic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = '../images/starwarsposter.png' //placeholder for unfound images
    })

    planetDiv.appendChild(planetName)
    planetDiv.appendChild(planetPic)

    mainArea.appendChild(planetDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    letcharID = charURL.substring(end - 2, end)
}