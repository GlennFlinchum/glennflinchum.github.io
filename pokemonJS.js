async function findPokemon() {
    const pokemonName = document.getElementById("pokeInput").value.toLowerCase();
    const cachedPokemon = localStorage.getItem(pokemonName);
    let request = "";

    if (cachedPokemon) {
        request = JSON.parse(cachedPokemon);
        console.log("Caching Pokemon")
    } else {
        request = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then(data => {return data.json()});
        
        console.log("Fetching Pokemon");

        localStorage.setItem(pokemonName, JSON.stringify(request));
    }
    
    // Sprite
    const pokemonSprite = request.sprites.front_default;
    const pokemonImg = document.getElementById("pokeImg");
    
    pokemonImg.src = pokemonSprite;

    // Audio (Cries)
    const pokemonCries = request.cries.latest;
    const pokemonAudio = document.getElementById("pokeAudio");

    pokemonAudio.src = pokemonCries;

    // Moves
    const pokemonMoves = request.moves;
    const movesList = document.querySelectorAll(".pokeMoves");

    // Clears list
    movesList.forEach(menu => menu.replaceChildren());

    if (pokemonMoves) { // used Gemini to fix uncaught TypeError
        for (let i = 0; i < pokemonMoves.length; i++) {
            const moveOption = pokemonMoves[i].move.name;
    
            movesList.forEach(menu => {
                const option = document.createElement("option");
                option.textContent = moveOption;
                option.value = moveOption;
                menu.appendChild(option);
            });
        }
    }
}

function addTeam() {
    const table = document.getElementById("teamTable");
    const currentImg = document.getElementById("pokeImg").src;
    const currentMoves = document.querySelectorAll(".pokeMoves");

    // Create table row
    const row = table.insertRow(-1);

    // Image Cell
    const pokemonSprite = row.insertCell(0);
    const img = document.createElement("img");
    img.src = currentImg;
    img.alt = "pokeTeam";
    pokemonSprite.appendChild(img);

    // Moves Cell
    const pokemonMoves = row.insertCell(1);
    const ul = document.createElement("ul");
    
    currentMoves.forEach(moveSelect => {
        const li = document.createElement("li");
        li.textContent = moveSelect.value;
        ul.appendChild(li);
    });
    
    pokemonMoves.appendChild(ul);

}