import { useState, useEffect } from "react";

import { localFavorites } from "../../utils";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemon } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemon pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
