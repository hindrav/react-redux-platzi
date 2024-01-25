import React from "react";
import { Card } from "antd";
import { FavoriteButton } from "./FavoriteButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name, image, abilities, id, favorite}) => {
  const dispatch = useDispatch();
  const renderAbilities = abilities?.map((ability) => ability.ability.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<FavoriteButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    >
      <Meta description={renderAbilities} />
    </Card>
  );
};

export default React.memo(PokemonCard, (prevProps, nextProps) => {
  return prevProps.isFavorite === nextProps.isFavorite;
});
