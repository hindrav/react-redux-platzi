import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const PokemonCard = ({ name, image, abilities }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra=<StarOutlined />
    >
      <Meta description={renderAbilities(abilities)} />
    </Card>
  );
};

const renderAbilities = (abilities) => {
  return abilities?.map(ability => ability.ability.name).join(', ');
}

export { PokemonCard };
