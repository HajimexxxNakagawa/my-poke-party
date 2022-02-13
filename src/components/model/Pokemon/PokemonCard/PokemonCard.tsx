/* eslint-disable @next/next/no-img-element */
import {
  Heading,
  HStack,
  Avatar,
  Box,
  Center,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { VFC } from "react";

import { usePoke } from "@/hooks/usePoke";

import { Pokemon, PokemonProps } from "@/types/Pokemon";

interface PokemonCardProps {
  pokeName: string;
}

export const PokemonCard: VFC<PokemonCardProps> = ({ pokeName }) => {
  const { pokemon, error } = usePoke(pokeName);

  if (!pokemon) return <></>;
  if (error) return <></>;

  return <PokemonCardView pokemon={pokemon} />;
};

export const PokemonCardView: VFC<PokemonProps> = ({ pokemon }) => {
  const ditto =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
  const dummyPoke: Pokemon = {
    name: "Loading...",
    img: ditto,
    type: ["loading..."],
  };
  const poke = pokemon.type ? pokemon : dummyPoke;

  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"320px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={poke.img}
          mb={4}
          pos={"relative"}
          icon={<img src={ditto} alt="" />}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {poke.name.toUpperCase()}
        </Heading>
        <Box h={2}></Box>
        <Center>
          <HStack>
            {poke.type.map((item) => (
              <Badge key={item} px={2} py={1} fontWeight={"400"}>
                {item}
              </Badge>
            ))}
          </HStack>
        </Center>
      </Box>
    </Center>
  );
};
