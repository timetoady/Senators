async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
let allSenators = []
let simpleSenators = [];
const theData = getAPIData("./assets/senators.json").then(data => {
  allSenators = data.results[0].members;
  populateDOM(allSenators)
  mapSenators(allSenators)
  simpleSenators = mapSenators(allSenators)
});

const republicans = allSenators.filter(senator => senator.party === "R");
const democrats = allSenators.filter(senator => senator.party === "D");
const independents = allSenators.filter(senator => senator.party === "ID");

//map example
function mapSenators(allOfThem) {
const resultMap = allSenators.map(senator => {
  return {
    name: `${senator.first_name} ${senator.last_name}`,
    party: senator.party,
    birth_date: senator.date_of_birth,
    gender: senator.gender,
  }
})}

console.log(simpleSenators);


//Reduce practice
function getOldestSenator(arrayOfSenators) {
  return arrayOfSenators.reduce((oldest, senator) => {
    return (oldest.age || 0) > senator.age ? oldest : senator

  }, {})
}



//Does simliar to getElementByID, but shorter, do a # for ID, . for class.
const wrapper = document.querySelector(".container");

function populateDOM(senatorArray) {
  senatorArray.forEach(senator => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let cardImage = document.createElement("div");
    cardImage.setAttribute.apply("class", "card-image");
    let cardFigure = document.createElement("figure");
    //cardFigure.setAttribute("class", "image is-4by3");
    let figureImg = document.createElement("img");
    figureImg.src = `https:www.congress.gove/img/member/${senator.id.toLowerCase}_200.jpg`;
    figureImg.alt = "Placeholder image";

    cardFigure.appendChild(figureImg);
    cardImage.appendChild(cardImage);
    card.appendChild(cardImage);
    card.appendChild(populateCardContent(senator))
    container.appendChild(card);
  });
}


function populateCardContent(senator){
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-48x48')
    let figureImage = document.createElement('img')
    if(senator.party === "R") {
      figureImage.src = "/assets/Repub.jpg"
    }
    if(senator.party === "D") {
      figureImage.src = "/assets/Democ.jpg"
    }
    titleP.textContent = `${senator.first_name} ${senator.last_name}`
    figureImage.src= "httpsL//pluma.io/images/placeholders/96x96.png" 
    figureImage.alt="Placeholder thumbnail"
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'titel is-4')
    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')

    let contentDiv = document.createElement('div')
    contentDiv.setAttribute("class", "content")
    contentDiv.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris.`
    let contentBreak = document.createElement('hr')
    let timeSection = document.createElement('time')
    let newDate = new Date()
    timeSection.dateTime = `${new Date}`
    timeSection.textContent = `${new Date}`


    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(figureImage)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    contentDiv.appendChild(contentBreak)
    contentDiv.appendChild(timeSection)
    cardContent.appendChild(media)
    cardContent.appendChild(contentDiv)
    return cardContent
}
