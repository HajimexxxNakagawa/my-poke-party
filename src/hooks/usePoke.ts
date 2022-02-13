import useSWR from "swr";

import { Pokemon } from "@/types/Pokemon";

export const usePoke = (pokeName = "ditto") => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const fetcher = (arg: string) => fetch(arg).then((res) => res.json());

  const { data, error } = useSWR(url, fetcher);

  const pokemon: Pokemon = {
    name: data?.name,
    img: data?.sprites.front_default,
    type: data?.types.map((item: any) => item.type.name),
  };

  return { pokemon, error } as const;
};
