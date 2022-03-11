import axios from "axios";
import React, { useEffect, useState } from "react";
import { POKEMON_DATA_URL } from "../../services/constants";
import { Pokemon, PokemonExtraData } from "../../services/types";
import pokemonCardStyles from "../../styles/components/home/PokemonCard.module.css";

const PokemonCard: ({ id, name, images, no }: Pokemon) => JSX.Element = ({
  id,
  name,
  images,
  no,
}: Pokemon) => {
  const [data, setData] = useState<PokemonExtraData | null>();

  useEffect(() => {
    axios
      .get(`${POKEMON_DATA_URL}${no}`)
      .then((response) => setData(response.data));
  }, []);

  console.log("data", data);
  console.log(no);
  console.log(data?.types);
  console.log(data?.height);
  console.log(data?.weight);
  console.log();

  return (
    <div className={pokemonCardStyles.card}>
      <p className={pokemonCardStyles.initial}>{name.substring(0, 1)}</p>
      <div className={pokemonCardStyles.cardData}>
        <img src={images.main} alt={name} className={pokemonCardStyles.image} />
        <div className={pokemonCardStyles.imageShadow}></div>
        <p className={pokemonCardStyles.name}>{name}</p>
        <p className={pokemonCardStyles.height}>
          {data?.height ? data?.height * 10 : 0} cm
        </p>
        <p className={pokemonCardStyles.height}>{data?.weight} kg</p>
        <p className={pokemonCardStyles.height}>EXP:{data?.base_experience}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
