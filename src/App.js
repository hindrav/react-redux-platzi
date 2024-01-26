import { useEffect } from "react";
import { Searcher } from "./components/Searcher";
import { Col } from "antd";
import { Spin } from 'antd';
import { PokemonList } from "./components/PokemonList";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonWithDetails } from "./slices/dataSlice";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonWithDetails())
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
