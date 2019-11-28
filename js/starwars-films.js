import { films } from "../Assets/films.js"

let mainArea = document.querySelector('main')

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')
    let pic = document.createElement('img')
    let CharNum = getCharNumber(film.url)
    pic.setAttribute('class', 'images')
    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl
    filmEpisode.textContent = `Episode: ${film.episode_id}`
    pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)
    filmDiv.appendChild(pic)
    filmDiv.appendChild(filmEpisode)

    mainArea.appendChild(filmDiv)
    filmPic.onerror = `this.src='./Assets/images/StarwarsPoster.png'`
    filmPic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './Assets/images/StarwarsPoster.png' //placeholder for un-found images
    })


})

function getCharNumber(planet.url) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

films.forEach(function(film) {

    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')
    let pic = document.createElement('img')

    let CharNum = getCharNumber(film.url)
    pic.setAttribute('class', 'images')
    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl
    filmEpisode.textContent = `Episode: ${film.episode_id}`
    pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)
    filmDiv.appendChild(pic)
    filmDiv.appendChild(filmEpisode)

    mainArea.appendChild(filmDiv)

    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './assets/images/Star_Wars_Logo.png'
    })
})