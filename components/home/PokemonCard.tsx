import React from "react";
import { Pokemon } from "../../services/types";
import pokemonCardStyles from "../../styles/components/home/PokemonCard.module.css";

const PokemonCard: ({ id, name, images }: Pokemon) => JSX.Element = ({
  id,
  name,
  images,
}: Pokemon) => {
  return (
    <div className={pokemonCardStyles.card}>
      <div className={pokemonCardStyles.cardData}>
        <img src={images.main} alt={name} className={pokemonCardStyles.image} />
        <p className={pokemonCardStyles.name}>{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
