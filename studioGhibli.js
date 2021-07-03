const baseURL = "https://ghibliapi.herokuapp.com/people";
const characterOutline = document.querySelector("section");
const container = document.createElement("div")
container.setAttribute("class", "container")

function fetchCharacter(e){

    fetch(baseURL)
    .then(function (results){
        return results.json()
        .then(function(json){
            console.log(json)
            displayResults(json)
        })
    })
}

function displayResults(e){
    for (i=0; i<= e.length; i++){


    let card = document.createElement("div")
    card.setAttribute("class", "card")
    let characterName = document.createElement("h2")
    characterName.innerText = e[i].name

    let characterAge = document.createElement("p")
    characterAge.innerText= `Age: ${e[i].age}`

    let characterGender = document.createElement("p")
    characterGender.innerText = `Gender: ${e[i].gender}`

    container.appendChild(card)
    card.appendChild(characterName)
    card.appendChild(characterAge)
    card.appendChild(characterGender)
    characterOutline.appendChild(container)
    }
}

fetchCharacter()

