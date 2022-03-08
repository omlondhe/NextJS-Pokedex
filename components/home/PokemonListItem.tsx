import React from "react";
import { Pokemon } from "../../services/types";
import pokemonListItemStyles from "../../styles/components/home/PokemonListItem.module.css";

const PokemonListItem: ({ id, name, images }: Pokemon) => JSX.Element = ({
  id,
  name,
  images,
}: Pokemon) => {
  return (
    <div className={pokemonListItemStyles.card}>
      <div className={pokemonListItemStyles.cardData}>
        <img
          src={images.main}
          alt={name}
          className={pokemonListItemStyles.image}
        />
        <p className={pokemonListItemStyles.name}>{name}</p>
      </div>
    </div>
  );
};

export default PokemonListItem;
