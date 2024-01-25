import { useEffect } from "react";
import { Searcher } from "./components/Searcher";
import { Col } from "antd";
import { Spin } from 'antd';
import { PokemonList } from "./components/PokemonList";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { getPokemons } from "./api";
import { useDispatch, useSelector } from "react-redux";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsApiRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsApiRes))
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading ? <Col>
        <Spin size="large"/>
      </Col> : <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
