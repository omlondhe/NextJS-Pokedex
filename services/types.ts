export interface PokemonImages {
  main: string;
  official: string;
}

export interface Pokemon {
  id: string;
  no: number;
  name: string;
  images: PokemonImages;
  // types: [];
  // height: number;
  // weight: number;
  // baseExperience: number;
}

export interface PokemonListData {
  url: string;
  name: string;
}
