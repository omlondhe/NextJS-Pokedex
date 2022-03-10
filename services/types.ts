export interface PokemonImages {
  main: string;
  official: string;
}

export interface Pokemon {
  id: string;
  name: string;
  height: number;
  weight: number;
  images: PokemonImages;
  baseExperience: number;
}

export interface PokemonListData {
  url: string;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
}
