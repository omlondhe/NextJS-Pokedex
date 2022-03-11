export interface PokemonImages {
  main: string;
  official: string;
}

export interface Pokemon {
  id: string;
  no: number;
  name: string;
  images: PokemonImages;
}

export interface PokemonExtraData {
  types: [];
  height: number;
  weight: number;
  base_experience: number;
}

export interface PokemonListData {
  url: string;
  name: string;
}
