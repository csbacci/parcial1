const historyList = document.getElementById('historyList');

// Función para obtener y mostrar el historial de Pokémon vistos
function displayHistory() {
    const viewedPokemons = JSON.parse(localStorage.getItem('viewedPokemons')) || [];
    historyList.innerHTML = '';
    viewedPokemons.forEach(pokemon => {
        const listItem = document.createElement('li');
        listItem.textContent = pokemon;
        historyList.appendChild(listItem);
    });
}

displayHistory();
