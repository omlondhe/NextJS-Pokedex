import axios from "axios";
import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { POKEMON_DATA_URL } from "../../services/constants";
import { Pokemon } from "../../services/types";
import pokemonCardStyles from "../../styles/components/home/PokemonCard.module.css";

const PokemonCard: ({ id, name, images, no }: Pokemon) => JSX.Element = ({
  id,
  name,
  images,
  no,
}: Pokemon) => {
  const { isLoading, isFetching, data, error }: UseQueryResult<any, any> =
    useQuery("pokemon-data", () =>
      axios.get(`${POKEMON_DATA_URL}${no}`).then((response) => response.data)
    );

  console.log("data", data);
  console.log(data?.types);
  console.log(data?.height);
  console.log(data?.weight);
  console.log(data?.base_experience);

  return (
    <div className={pokemonCardStyles.card}>
      <div className={pokemonCardStyles.cardData}>
        <img src={images.main} alt={name} className={pokemonCardStyles.image} />
        <div className={pokemonCardStyles.imageShadow}></div>
        <p className={pokemonCardStyles.name}>{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
