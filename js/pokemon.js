/*async function getPokemonData(url){
    const response = await fetch('https://example.com/movies.json')
    const myJson = await response.json()
}*/

//https://github.com/fanzeyi/pokemon.json/blob/master/images/001.png

class pokemon {
    constructor(id, name, weight, types) {
        this.id = id
        this.name = name
        this.weight = weight
        this.types = types
    }
}

const Piratemon = new pokemon(808, "Piratemon", 150, [{ type: { name: "water" } }])

//adding pokemon by the numbers with an alert
const newButton = document.querySelector('#newPokemon');
newButton.addEventListener('click', function() {
    let pokeId = prompt("please enter a Pokemon ID between 1 & 807");
    if (pokeId > 0 && pokeID <= 807) {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
            .then(result => {
                populateDOM(result)
            })
    } else {
        alert('there are no Pokemon with that ID. Choose another one')
    } //populateDOM(Piratemon)
})

//reusable async functions to fetch the url data
async function getPokemonData(url) {
    try {
        const response = await fetch(url) //getPokemonData('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        return data;
    } catch (error) {
        console.error(error)
    }
}

// now use the return async data!
const theData = gatAPIData("https://pokeapi.co/api/v2/pokemon/")
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
                .then(pokeData => {
                    populateDom(pokeData)
                    populateDom(Piratemon)
                })
        }
    })
console.log(theData)

const theData2 = getAPIData("https://pokeapi.co/api/v2/pokemon/?limit=20")
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url).then(pokeData2 => {
                populateDOM(pokeData2)
            })
        }
    })

//A function to sort out number of pokemon
/*function getPokeNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return `00${charID.slice(1, 2)}`
    } else {
        return `0${charID}`
    }
}*/

//To capitalize the first letter in passed value
const capitalize = s => {
    if (typeof s !== "string") return ""
    return s[0].toUpperCase() + s.slice(1)
};

function getPokeNumber(id) {
    if (id < 10) return `00#{id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}


let mainArea = document.querySelector('main')

//populating the DOM and filling in the content
function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeDiv = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
        /* //
         //let height = document.createElement('p')*/

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
        /*//pokeDiv.setAttribute('class', 'CharDivs')*/

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)
        /*//pokeDiv.appendChild(height)*/

    //making the card flip and do its thing
    pokeCard.addEventListener('click', function() {
        pokeCard.classList.toggle('is-flipped')
    });
}

//the front of the card area
function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card_face card_face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    pic.src = `https://github.com/fanzeyi/pokemon.json/blob/master/images/${pokeNum}.png`
    let pokeNum = getPokeNumber(single_pokemon.id)
        //let pokeNum = getPokeNumber(data.id)
        //name.textContent = capitalize(`${single_pokemon.name}`)
    let pokeId = document.createElement("p")
    pokeFront.appendChild(name)
    pokeFront.appendChild(pic)

    /*name.textContent = `${data.name} height: ${data.height}`
    pic.src = `../Assets/images/${pokeNum}.png`*/
    //pokeDiv.appendChild(pic)
    //pokeDiv.appendChild(name)

}

//the back of the card area
function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card_face card_face--back')
    let pokeOrder = document.createElement('p')
    let types = document.createElement("div")
    let pokeHP = document.createElement('h5')
    let height = document.createElement('p')
    pokeId.textContent = `ID: ${single_pokemon.id}`
    pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
        //pokeHP.textContent = data.stats[0].base_stat
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
}