
fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => cards(data.results));
    
function cards(array) {
    const cardContainer = document.querySelector("#card-group")
    console.log(array)
    array.slice(0, 10).forEach(character => {
        cardContainer.innerHTML =
            cardContainer.innerHTML +
            `<div class="card">
        <h2>${character.name}</h2>
        <h4><span>Created:</span> ${character.created}</h4>
        <h4><span>Species:</span> ${character.species}</h4>
        <h4><span>Episode:</span> ${character.episode.length}</h4>
        <h4><span>Location:</span> ${character.location.name}</h4>
        <img src=${character.image} class="character-image"></img>    
        </div>
            <br>
        `;
    })
}

