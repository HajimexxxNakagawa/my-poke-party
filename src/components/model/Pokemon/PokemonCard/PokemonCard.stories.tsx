import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockPokemon } from "@/mocks/Pokemon";

import { PokemonCardView } from "./PokemonCard";

export default {
  title: "Model/Pokemon/PokemonCard",
  component: PokemonCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PokemonCardView>;

// SingleProp ver
const Template: ComponentStory<typeof PokemonCardView> = (args) => (
  <PokemonCardView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pokemon: mockPokemon,
};
