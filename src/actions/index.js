import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetails));
  };
