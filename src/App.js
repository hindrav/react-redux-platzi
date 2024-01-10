import { useEffect } from "react";
import { Searcher } from "./components/Searcher";
import { Col } from "antd";
import { PokemonList } from "./components/PokemonList";
import { getPokemonsWithDetails } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";
import { getPokemons } from "./api";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsApiRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsApiRes))
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
