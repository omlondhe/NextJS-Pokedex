import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKGROUND_COLOR, POKEMON_DATA_URL } from "../../services/constants";
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

  console.log(data?.types);

  return (
    <div className={pokemonCardStyles.card}>
      <p className={pokemonCardStyles.initial}>{name.substring(0, 1)}</p>
      <div
        className={pokemonCardStyles.cardData}
        style={{
          backgroundColor: data?.types
            ? BACKGROUND_COLOR[data?.types[0].type.name]
            : "white",
        }}
      >
        <img src={images.main} alt={name} className={pokemonCardStyles.image} />
        {/* <div className={pokemonCardStyles.imageShadow}></div> */}
        <p className={pokemonCardStyles.name}>{name}</p>
        <div className={pokemonCardStyles.heightAndWeight}>
          <p className={pokemonCardStyles.height}>
            Height: {data?.height ? data?.height * 10 : 0} cm
          </p>
          <p className={pokemonCardStyles.weight}>
            Weight: {data?.weight ? data?.weight / 10 : data?.weight} kg
          </p>
        </div>
        <p className={pokemonCardStyles.xp}>{data?.base_experience}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
