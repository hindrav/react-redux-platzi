const API_URL = "https://pokeapi.co/api/v2/pokemon/"
const LIMIT = "?limit=151&offset=0";

const getPokemons = async () => {
    try {
        const response = await fetch(API_URL + LIMIT);
        if (!response.ok) {
            throw new Error("HTTP-Error: " + response.status);
        }
        const data = await response.json();
        return data.results || []; // Retornar un array vacío si no hay resultados
    } catch (err) {
        console.log('Error fetching Pokémon data:', err);
        return []; // Retornar un array vacío en caso de error
    }
};

const getPokemonDetails = async (pokemon) => {
    try {
        const response = await fetch(pokemon.url);
        if (!response.ok) {
            throw new Error("HTTP-Error: " + response.status);
        }
        const data = await response.json();
        return data || {}; // Retornar un objeto vacío si no hay datos
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        return {}; // Retornar un objeto vacío en caso de error
    }
};

export { getPokemons, getPokemonDetails };
