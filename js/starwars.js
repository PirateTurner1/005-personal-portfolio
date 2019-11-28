import { people } from "../Assets/people.js"
import { planets } from "../Assets/planets.js"
import { species } from "../Assets/species.js"
import { starships } from "../Assets/starships.js"
import { vehicles } from "../Assets/vehicles.js"

let mainArea = document.querySelector("main")
let nav = document.querySelector("nav")
let home = document.createElement("button")
let filmBtn = document.createElement("button")
let peopleBtn = document.createElement("button")
let planetsBtn = document.createElement("button")
let speciesBtn = document.createElement("button")
let starshipsBtn = document.createElement("button")
let vehiclesBtn = document.createElement("button")

home.textContent = "HOME"
filmBtn.textContent = "FILMS"
peopleBtn.textContent = "PEOPLE"
planetsBtn.textContent = "PLANETS"
speciesBtn.textContent = "SPECIES"
starshipsBtn.textContent = "STARSHIPS"
vehiclesBtn.textContent = "VEHICLES"



let filterArea = document.querySelector(".filters")

console.log('i am javaScript running in your page!')
    /*
    const justNames = people.map(person => {
        return {
            name: person.name,
            foo: 'bar',
            config: [{ style: "something" }]
        }
    }) console.log(justNames)*/

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    personDiv.setAttribute('class', 'charDivs')
    pic.setAttribute('class', 'picDivs')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = `gender: ${person.gender}`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        // https://starwars-visualguide.com/assets/img/characters/1.jpg  //use this as backup, this picture hs worked before!
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)
    mainArea.appendChild(personDiv)

    pic.onerror = `this.src='./Assets/images/StarwarsPoster.png'`
    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './Assets/images/StarwarsPoster.png' //placeholder for un-found images
    })
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

home.addEventListener("click", () => { document.location.href = "index.html" })

var males = people.filter(person => person.gender === "male")
const maleCharacters = people.filter(person => person.gender === "male");
const femaleCharacters = people.filter(person => person.gender === "female");
const otherCharacters = people.filter(person => person.gender != "male" && person.gender != "female")
const allDivs = Array.from(document.querySelectorAll('div'))
console.log(allDivs)

const mainHeader = document.querySelector('header')

let maleButton = document.createElement('button')
maleButton.textContent = "MALES"
maleButton.setAttribute("class", "male")
    //filterArea.appendChild(maleButton)

maleButton.addEventListener('click', () => {
    mainArea.textContent = ""
    filterArea.textContent = ""
    deleteNode()
    showCharArray(maleCharacters)
        /* femaleCharacters.forEach((character => {
            let matchedDiv = allDivs.find((oneDiv) => {
                return oneDiv.firstChild.textContent === character.name
            })
            if (matchedDiv.setAttribute('style') === "display: none;") {
                otherCharacters()
                console.log('all female characters are gone')
            } else maleCharacters.forEach(character => {
                let matchedDiv = allDivs.find(oneDiv => {
                    return oneDiv.firstChild.textContent === character.name;
                })
        matchedDiv.setAttribute("style", "display: revert")*/
})
console.log(maleCharacters)

let femaleButton = document.createElement('button')
femaleButton.textContent = "FEMALES"
femaleButton.setAttribute("class", "female")
    //filterArea.appendChild(femaleButton)
femaleButton.addEventListener('click', () => {
    deleteNode()
    showCharArray(femaleCharacters)
        /* maleCharacters.forEach((character) => {
             let matchedDiv = allDivs.find((oneDiv) => {
                 return oneDiv.firstChild.textContent === Character.name
             })
             if (matchedDiv.setAttribute('style') === "display: none;") {
                 otherCharacters()
                 console.log('all male characters are gone')
             } else femaleCharacters.forEach(character => {
                 let matchedDiv = allDivs.find(oneDiv => {
                     return oneDiv.firstChild.textContent === character.name;
                 })
                 matchedDiv.setAttribute("style", "display: revert")
             })
         })*/
})
console.log(femaleCharacters)

let othersButton = document.createElement('button')
othersButton.textContent = "OTHERS"
othersButton.setAttribute("class", "other")
    //filterArea.appendChild(othersButton)

othersButton.addEventListener('click', () => {
    deleteNode()
    showCharArray(otherCharacters)
})
console.log(otherCharacters)

function deleteNode() {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild)
    }

    mainHeader.appendChild(maleButton)
    mainHeader.appendChild(femaleButton)
    mainHeader.appendChild(OthersButton)

    const maleCharacters = people.filter(person => person.gender === 'male')
    const femaleCharacters = people.filter(person => person.gender === 'female')
    const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')
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
    pic.onerror = `this.src='./Assets/images/StarwarsPoster.png'`
    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './Assets/images/StarwarsPoster.png' //placeholder for un-found images
    })

})


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