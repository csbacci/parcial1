const pokemonDetail = document.getElementById('pokemonDetail');
const params = new URLSearchParams(window.location.search);
const pokemonName = params.get('name');

// Función para obtener y mostrar los detalles del Pokémon seleccionado
async function fetchPokemonDetails(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        pokemonDetail.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
        `;
    } catch (error) {
        console.error('Error fetching pokemon details:', error);
    }
}

fetchPokemonDetails(pokemonName);
