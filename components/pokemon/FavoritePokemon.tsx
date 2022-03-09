import React from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";

interface Props {
  pokemons: number[];
}

export const FavoritePokemon: React.FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((pokeId) => (
        <FavoriteCardPokemon pokeId={pokeId} key={pokeId} />
      ))}
    </Grid.Container>
  );
};
