import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const PokemonCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://github.com/PokeAPI/sprites/blob/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/1.png?raw=true"
          alt=""
        />
      }
      extra=<StarOutlined />
    >
      <Meta description="Water" />
    </Card>
  );
};

export { PokemonCard };
