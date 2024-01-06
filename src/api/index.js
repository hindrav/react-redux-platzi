import axios from 'axios';
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

export { getPokemons };