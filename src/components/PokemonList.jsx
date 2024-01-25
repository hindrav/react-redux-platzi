// PokemonList.jsx
import PokemonCard  from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) =>{
    if (!pokemons || pokemons.length === 0) return null;
    return (
        <div className="pokemonList">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    name={pokemon.name}
                    key={pokemon.name}
                    image={pokemon.sprites.front_default}
                    abilities={pokemon.abilities}
                    id={pokemon.id}
                    favorite={pokemon.favorite}
                />
            ))}
        </div>
    );
};

export { PokemonList };
