import { Grid } from "@chakra-ui/react";
import { VFC } from "react";

import { PokemonCard } from "../PokemonCard";

interface PokeCardListProps {
  pokemons: string[];
}

export const PokeCardList: VFC<PokeCardListProps> = ({ pokemons }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {pokemons.map((poke) => (
        <PokemonCard pokeName={poke} key={poke} />
      ))}
    </Grid>
  );
};
