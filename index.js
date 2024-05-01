const pokemonList = document.getElementById('pokemonList');

// Función para obtener los primeros 100 Pokémon de la API
async function fetchPokemons() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        const pokemons = data.results;
        pokemons.forEach(pokemon => {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
            pokemonCard.innerHTML = `<a href="detalle.html?name=${pokemon.name}">${pokemon.name}</a>`;
            pokemonList.appendChild(pokemonCard);
        });
    } catch (error) {
        console.error('Error fetching pokemons:', error);
    }
}

fetchPokemons();
