import { Grid, useBreakpointValue } from "@chakra-ui/react";
import { VFC } from "react";

import { PokemonCard } from "../PokemonCard";

interface PokeCardListProps {
  pokemons: string[];
}

export const PokeCardList: VFC<PokeCardListProps> = ({ pokemons }) => {
  const col = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Grid templateColumns={`repeat(${col}, 1fr)`} gap={4}>
      {pokemons.map((poke) => (
        <PokemonCard pokeName={poke} key={poke} />
      ))}
    </Grid>
  );
};
