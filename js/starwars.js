import { people } from "../Assets/people.js"



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

//populating the DOM
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

const maleButton = document.querySelector('#maleCharacter')
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

function showCharArray(characters) {
    characters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        if (matchedDiv.setAttribute('style') === "display: none;") {
            otherCharacters()
            console.log('all male characters are gone')
        } else characters.forEach(character => {
            let matchedDiv = allDivs.find(oneDiv => {
                return oneDiv.firstChild.textContent === character.name;
            })
            matchedDiv.setAttribute("style", "display: revert")
        })
    })
}