import { Pokemon } from "models/pokemon";
import React from "react";

export type FavouritesContextInnerType = {
  favourites: Pokemon[];
};
export type FavouritesContextType = FavouritesContextInnerType & {
  addFavourite: (pokemon: Pokemon) => void;
  removeFavourite: (name: string) => void;
};

const Context = React.createContext<FavouritesContextType | null>(null);
export default Context;
