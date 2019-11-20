/*async function getPokemonData(url){
    const response = await fetch('https://example.com/movies.json')
    const myJson = await response.json()
}*/

// https://raw.github

class pokemon {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

const Thoremon = new pokemon(1000, 'Thoremon')

const newButton = document.querySelector('#newButton')
newButton.addEventListener('click', function() {
    let pokeID = promt("please enter a Pokemon ID")
    if (pokeID > 0 && pokeID <= 807) {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
            .then(result => {
                populateDOM(results)
            })
    } else {
        alert('there are no Pokemon with that ID. Choose another one')
    } //populateDOM(thoremon)
})

async function getPokemonData(url) {
    try {
        const response = await getPokemonData('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// now use the return async data!
const theData = gatAPIData('https://pokeapi.co/api/v2/pokemon/').then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
            .then(pokeData => {
                populateDom(pokeData)
                populateDom(Thoremon)
            })
    }
})

console.log(theData)
let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {

    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
        //let pokeDiv = document.createElement('div')
        //let height = document.createElement('p')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
        //pokeDiv.setAttribute('class', 'CharDivs')

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    mainArea.appendChild(pokeScene)
        //pokeDiv.appendChild(height)

    pokeCard.addEventListener('click', function() {
        pokeCard.classList.toggle('is-flipped');
    });
}

function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card_face card_face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    pokeFront.appendChild(name)
    name.textContent = `${data.name} height: ${data.height}`

    pic.src = `../Assets/images/${pokeNum}.png`
        //pokeDiv.appendChild(pic)
        //pokeDiv.appendChild(name)
    pokeFront.appendChild(pic)
}

function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card_face card_face--back')
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h5')
    pokeOrder.textContent = `#${data.id} ${data.name[1,2].toUpperCase()}`
    pokeHP.textContent = data.stats[0].base_stat
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
}

/*function getPokeNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return `00${charID.slice(1, 2)}`
    } else {
        return `0${charID}`
    }
}*/

function getPokeNumber(id) {
    if (id < 10) return `00#{id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}