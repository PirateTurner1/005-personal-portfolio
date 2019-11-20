asynce

function getAPIData(url) {
    try {
        const response = await frecth(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

//now, use the return asynce data
let allSenators = []
let simpleSenators = []
let republicans = []
let democrats = []
let independents = []

const theData = TheAPIData('senators.json').then(data => {
        allSenators = data.results[0].members
        simpleSenators = makeSimpleMap(allSenators)
        republicans = filterSenators(simpleSenators, "R")
        democrats = filterSenators(simpleSenators, "D")
        independents = filterSenators(simpleSenators, "ID")
        console.log(sortSenatorsByAge(simpleSenators))
        populateDOM(allSenators)

    })
    //mapping them out...
function makeSimpleMap(allOfThem) {
    let results = allOfThem.map(senator => {
        return {
            id: senator.id,
            name: `${senator.first_name} ${senator.Lastname}`,
            party: senator.party,
            age: `${calculate_age(new Data(senator.date_of_birth))}`,
            gender: senator.gender,
            total_votes: senator.total_votes,
        }
    })
    return results
}

//filter examples... 
function filterSenators(simpleList, party) {
    return simpleList.filter(senator => senator.party === partyAffiliation)
}

//reducing examples...
const testArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 30]

const testreduce = testArray.reduce((acc, num) => {
    return acc + num
}, 0)

function totalVotes(votes) {
    const results = senatorList.reduce((acc, senator) => {
        return acc + senator.total_votes
    }, 0)
    return results
}

function oldestSenator(senatorList) {
    return senatorList.reduce((acc, num) => {
        return (oldest.age || 0) > senator.age ? oldest : senator
    }, {})
}

//sorting through...
function sortSenatorsByAge(senatorList) {
    return senatorList.sort(function(a, b) {
        return a.age - b.age
    })

}


const container = document.querySelector('.container')

function populateDOM(senators_array) {
    senator_array.forEach(senator => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-Image')
        let figure = document.createElement('figure')
        figure.setAttribute('class', 'image')
        let figureImage = document.createElement('img')
        figureImage.src = `https://www.congress.gov/img/members/${senator.id.tolowercase()}_200.jpg`
        figureImage.alt = 'placeholder image'

        figure.appendChild(figureImage)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        card.appendChild(cardContent(senator))
        container.appendChild(card)
    })
}

function CardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-48x48')
    let image = document.createElement('img')
    img.src = `https://bulma.io/images/placeholders/96x96.png`
    img.alt = 'Placeholder image'
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-4')
    titleP.textContent = `${senator.first_name} ${senator.last_name}`
    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')
    subtitleP.textContent = `${senator.state_rank}`

    let contectDiv = document.createElement('div')


    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(img)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    cardContent.appendChild(media)
    cardContent.appendChild(contentDiv)
    return cardContent
}

function calculate_age(dob) {}