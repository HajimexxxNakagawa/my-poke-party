import { Center, Text } from "@chakra-ui/react";
import { VFC } from "react";

import { PokeCardList } from "@/components/model/Pokemon/PokeCardList";

const MY_POKEMON_PARTY = [
  "empoleon",
  "staraptor",
  "luxray",
  "medicham",
  "garchomp",
  "rapidash",
];

export const TopPageView: VFC = () => {
  return (
    <main>
      <Center flexDirection={"column"}>
        <Text fontSize="4xl">My Favorite Party</Text>

        <PokeCardList pokemons={MY_POKEMON_PARTY} />
      </Center>
    </main>
  );
};
