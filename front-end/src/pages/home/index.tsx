import useFavouritesContext from "context/use-favourites-context";
import { stat } from "fs";
import { Pokemon } from "models/pokemon";
import RemoteResource from "models/remote-resource";
import React, { FC, FormEventHandler, useState } from "react";
import { useQuery } from "react-query";
import getPokemonWithDescription from "services/shakespearSearchService";
import PokemonItem from "./pokemon-item";
import styles from "./styles.module.scss";
import usePokemonSearch from "./use-pokemon-search";

const ErrorStatus: FC<{ errorMsg: string }> = ({ errorMsg }) => (
  <div>{errorMsg}</div>
);

const LoadingStatus = () => <div>Loading...</div>;

const Home: FC = () => {
  const { favourites, addFavourite, removeFavourite } = useFavouritesContext();
  const [pokemonSearch, setPokemonSearch] = useState<string>("");
  const { data, status, error, search } = usePokemonSearch<Pokemon>();

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    search(pokemonSearch);
  };

  return (
    <>
      <h1>Pokemon shakespeare</h1>
      <form onSubmit={onSubmit} className={styles.search_pokemon_form}>
        <input
          className={styles.search_pokemon_form__input}
          name="pokemon-search"
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
          type="search"
          placeholder="Search pokemon"
        />
        <button type="submit" className={styles.search_pokemon_form__submit}>
          Search
        </button>
      </form>
      {data && status === "success" && (
        <PokemonItem
          pokemon={data}
          onStar={addFavourite}
          onUnStar={(item) => removeFavourite(item.name)}
          starred={favourites.map((item) => item.name).includes(data.name)}
        />
      )}
      {status === "loading" && <LoadingStatus />}
      {status === "error" && <ErrorStatus errorMsg="error" />}
    </>
  );
};

export default Home;
