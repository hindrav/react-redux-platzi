export const SET_POKEMONS = "SET_POKEMONS";

// Con el return explícito
// export const setPokemons = (pokemons) => {
//     return{
//         type: SET_POKEMONS,
//         payload: pokemons
//     }
// };

// Con return implícito
export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    payload: pokemons
})