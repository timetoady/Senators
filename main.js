async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

let allSenators = [];
const theData = getAPIData("./assets/senators.json").then(data => {
  allSenators = data.results[0].members;
});

const republicans = allSenators.filter(senator => senator.party === "R");
const democrats = allSenators.filter(senator => senator.party === "D");
const independents = allSenators.filter(senator => senator.party === "ID");

console.log(republicans);

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
    figureImage.src= "httpsL//pluma.io/images/placeholders/96x96.png" 
    figureImage.alt="Placeholder thumbnail"
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'titel is-4')
    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(figureImage)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    cardContent.appendChild(media)
    return cardContent
}