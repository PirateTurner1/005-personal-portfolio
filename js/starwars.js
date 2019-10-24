import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('i am javaScript running in your page!')

let mainArea = document.querySelector('main')

/* films.forEach(function(film) {

    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')
        //let filmPic = document.createElement('img');

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl
        //filmPic.textContent = film.pic
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)
        //filmDiv.appendChild(filmPic)

    mainArea.appendChild(filmDiv)
});
 */

const justNames = people.map(person => {
    return {
        name: person.name,
        foo: 'bar',
        config: [{ style: "something" }]
    }
})

console.log(justNames)

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

const allDivs = Array.from(document.querySelectorAll('div'))
console.log(allDivs)

const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = "male Characters"

maleButton.addEventListener('click', () => {
    femaleCharacters.forEach((item) => {
        let matchedDiv = allDivs.find((oneDiv) => {
                return oneDiv.firstChild.textContent === character.name
            })
            //if (matchedDiv.getAttribute('style') === "display: none;") {
            //console.log(matchedDiv)
        matchedDiv.setAttribute("style", "display: revert;")
    })
    matchedDiv.setAttribute("style", "display:none;")
        //matchedDiv.classList.add('animated', 'fadeOutDownBig delay-2s')
})

let femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    maleCharacters.forEach((item) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === Character.name
        })

        matchedDiv.setAttribute("style", "display:none;")
            //matchedDiv.classList.add('animated', 'fadeOutDownBig delay-2s')
    })
})

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')

console.log(maleCharacters)
console.log(femaleCharacters)