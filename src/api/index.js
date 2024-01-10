// import axios from 'axios';
const API_URL = "https://pokeapi.co/api/v2/pokemon/"
const LIMIT = "?limit=151&offset=0";
// Using axios
// const getPokemons = () =>{
//     return axios.get(API_URL+LIMIT)
//     .then((res) => console.log(res.data.results))
//     .catch((err) => console.log(err));
// };

const getPokemons = async () =>{
    try{
        const response = await fetch(API_URL + LIMIT);
        if(!response.ok){throw new Error("HTTP-Error: "+response.status)};
        const data = await response.json();
        console.log(data.results);
        return data.results;
    } catch(err){
        console.log('error', err);
    }
}

// const getPokemonDetails = async (pokemon) => {
//     return axios.get(pokemon.url)
//     .then(res => res.data)
//     .catch((err) => console.log(err))
// }

const getPokemonDetails = async (pokemon) => {
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

export { getPokemons, getPokemonDetails };