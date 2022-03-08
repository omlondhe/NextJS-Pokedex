export interface PokemonImages {
  main: string;
  official: string;
}

export interface Pokemon {
  id: string;
  name: string;
  images: PokemonImages;
}

export interface PokemonListData {
  name: string;
  url: string;
}
