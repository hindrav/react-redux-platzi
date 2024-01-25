// reducers/pokemonsReducer.js
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: [...action.payload] };
    case SET_FAVORITE:
      return {
        ...state,
        pokemons: state.pokemons.map(pokemon =>
          pokemon.id === action.payload.pokemonId
            ? { ...pokemon, favorite: !pokemon.favorite }
            : pokemon
        ),
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
