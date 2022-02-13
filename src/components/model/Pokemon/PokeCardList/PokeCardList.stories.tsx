import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { PokeCardList } from "./PokeCardList";

export default {
  title: "Model/Pokemon/PokeCardList",
  component: PokeCardList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PokeCardList>;

// ListProp ver
const Template: ComponentStory<typeof PokeCardList> = (args) => (
  <PokeCardList {...args} />
);

const MY_POKEMON_PARTY = [
  "empoleon",
  "staraptor",
  "luxray",
  "medicham",
  "garchomp",
  "rapidash",
];

export const Default = Template.bind({});
Default.args = {
  pokemons: MY_POKEMON_PARTY,
};
