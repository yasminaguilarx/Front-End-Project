const $container = $('#container');
let $userInput = $("<input>").addClass("charSearch").attr('type', 'text').attr('name', 'search').attr('id', 'searchBar').attr('placeholder', "search for a character").appendTo($container);

const $searchBtn = $('<button>').attr('id', 'submit').text('Search').appendTo($container);
$('#submit').on('click', () => {
const $searchTarget = $('input[id=searchBar]').val();
serverInfo($searchTarget);
});

let $resultContainer = $('#resultContainer');


function serverInfo(input) {
$resultContainer.empty();

    $.get(`https://rickandmortyapi.com/api/character/?name=${input}`, (data) => {
        accessedData(data)
    });
};

function accessedData(data) {
    data.results.forEach((element) => {
        buildResultCard(element)
    });
};

function buildResultCard(element) {
    let charName = element.name;
    let charStatus = element.status;
    let charOrigin = element.origin.name;
    let charImg = element.image;
    let charSpecies = element.species;

    const $resultCard = $('<div>').attr('id', 'result-card').appendTo($resultContainer);

    const $imageContainer = $('<div>').attr('id', 'image-container').appendTo($resultCard);
    $('<img>').attr('src', charImg).appendTo($imageContainer);
    
    
    const $detailsContainer = $('<div>').attr('id', 'details-container').appendTo($resultCard);
    $('<h1>').text(charName).appendTo($detailsContainer);
    $('<h1>').text(charStatus).appendTo($detailsContainer);
    $('<h1>').text(charOrigin).appendTo($detailsContainer);
    $('<h1>').text(charSpecies).appendTo($detailsContainer);
};


