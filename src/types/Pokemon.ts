export type Pokemon = {
  name: string;
  img: string;
  type: string[];
};

export interface PokemonProps {
  pokemon: Pokemon;
}

export interface PokemonListProps {
  pokemons: Pokemon[];
}
