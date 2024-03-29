import axios from "axios";
import { NextComponentType } from "next";
import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import {
  POKEMON_LIST_URL,
  POKEMON_MAIN_IMAGE,
  POKEMON_OFFICIAL_IMAGE,
} from "../../services/constants";
import { PokemonListData } from "../../services/types";
import PokemonCard from "./PokemonCard";
import pokemonListStyles from "../../styles/components/home/PokemonList.module.css";

const PokemonList: NextComponentType = () => {
  const { isLoading, isFetching, error, data }: UseQueryResult<any, any> =
    useQuery("pokemon-list", () =>
      axios.get(POKEMON_LIST_URL).then((response) => response.data)
    );

  return isLoading ? (
    <p>"Loading..."</p>
  ) : error ? (
    <p>`An error occurred {error.toString()}`</p>
  ) : (
    <div className={pokemonListStyles.list}>
      {data?.results.map((pokemon: PokemonListData, index: number) => (
        <PokemonCard
          id={pokemon.url}
          key={pokemon.url}
          no={index + 1}
          name={pokemon.name}
          images={{
            main: `${POKEMON_MAIN_IMAGE}${index + 1}.svg`,
            official: `${POKEMON_OFFICIAL_IMAGE}${index + 1}.png`,
          }}
        />
      ))}
    </div>
  );
};

export default PokemonList;
