async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

//now, use the return async data
let allSenators = []
let simpleSenators = []
let republicans = []
let democrats = []
let independents = []


const theData = getAPIData('Senators.json')
    .then(data => {
        allSenators = data.results[0].members
        simpleSenators = simpleMap(allSenators)
        republicans = filterSenators(simpleSenators, "R")
        democrats = filterSenators(simpleSenators, "D")
        independents = filterSenators(simpleSenators, "ID")
        console.log(sortSenatorsByAge(simpleSenators))
        populateDOM(simpleSenators)
    })

//button option
/*
let mainArea = document.querySelector('main')
 let mainButton = document.querySelector('button')
 mainButton.textContent = 'button'
 mainArea.appendChild(mainButton)
 mainButton.addEventListener('click',function(){
     console.log(allSenators)
 })
 */


//mapping them out...
function simpleMap(arr) { //makeSimpleMap(allOfThem) "function"
    let results = arr.map(senator => {
        return {
            id: senator.id,
            name: `${senator.first_name} ${senator.Last_name}`,
            party: senator.party,
            //age: `${calculate_age(new Data(senator.date_of_birth))}`,
            gender: senator.gender,
            total_votes: senator.total_votes,
        }
    })
    return results
}

//filter examples... 
function filterSenators(simpleList, partyAffiliation) {
    return simpleList.filter(senator => senator.party === partyAffiliation) // the partyAffiliation
}

//reducing examples...
const testArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 30]
const testReduce = testArray.reduce((acc, num) => {
    return acc + num
}, 0)

function totalVotes(senatorList) {
    const results = senatorList.reduce((acc, senator) => {
        return acc + senator.total_votes
    }, 0)
    return results
}

function oldestSenator(senatorList) {
    const results = senatorList.reduce((oldest, num) => {
        return (oldest.age || 0) > senator.age ? oldest : senator
    }, {})
    return results
}

//sorting through...
function sortSenatorsByAge(senatorList) {
    return senatorList.sort(function(a, b) {
        return a.age - b.age
    })
}


const container = document.querySelector('.container')
    // populating the DOM
function populateDOM(senator_arr) {
    senator_arr.forEach(senator => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')

        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-Image')

        let figure = document.createElement('figure')
        figure.setAttribute('class', 'image is-4by4')

        let figureImage = document.createElement('img')
        figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`
        figureImage.alt = 'placeholder image' //'./images/Doug_Jones-2017.png'

        figure.appendChild(figureImage)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        card.appendChild(cardContent(senator))
        container.appendChild(card)
    })
}

function cardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')

    let media = document.createElement('div')
    media.setAttribute('class', 'media')

    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')

    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-48x48')

    //party affiliation colors 
    let party = document.createElement("div");
    party.textContent = senator.party;
    if (senator.party === "R") {
        party.setAttribute("class", "republican partyColor");
    } else if (senator.party === "D") {
        party.setAttribute("class", "democrat partyColor");
    } else if (senator.party === "ID") {
        party.setAttribute("class", "independent partyColor");
    }

    /*let image = document.createElement('img')
    img.src = `https://bulma.io/images/placeholders/96x96.png`
    img.alt = 'Placeholder image'
    */

    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')

    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-5')
    titleP.textContent = `${senator.first_name} ${senator.last_name}`

    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')
    subtitleP.textContent = `${senator.state_rank}`

    let contentDiv = document.createElement("div")
    contentDiv.setAttribute("class", "contentDiv")
    contentDiv.textContent = senator.info

    let contentBreak = document.createElement('p')

    let age = document.createElement("p")
    age.textContent = `Age: ${senator.age}` // ${calculate.age(new date(senator.date_of_birth))}

    let votes = document.createElement("div")
    votes.setAttribute("class", "votes-flex")
    let totalVotes = document.createElement("p")
    totalVotes.textContent = `Total: ${senator.total_votes}`

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(party)

    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    contentDiv.appendChild(contentBreak)
    contentDiv.appendChild(age)
    cardContent.appendChild(media)
    cardContent.appendChild(contentDiv)

    return cardContent
}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime()
    var age_dt = new Date(diff_ms)

    return Math.abs(age_dt.getUTCFullYear() - 1970)
}
