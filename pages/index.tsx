import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon } from "../interfaces/pokemon-list";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";
interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokémons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

// Debería usar getStaticProps cuando:
//- Los datos necesarios para representar la página están disponibles en el momento de la compilación antes de la solicitud del usuario.
//- Los datos provienen de un CMS sin cabeza.
//- Los datos se pueden almacenar en caché públicamente (no específicos del usuario).
//- La página debe estar renderizada previamente (para SEO) y ser muy rápida: getStaticProps genera archivos HTML y JSON, los cuales pueden ser almacenados en caché por un CDN para el rendimiento.

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("hola mino");

  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      i + 1
    }.png`,
  }));

  //
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
