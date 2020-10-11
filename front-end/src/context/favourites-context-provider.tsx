import { Pokemon } from "models/pokemon";
import { platform } from "os";
import React, { FC, useEffect, useState } from "react";
import FavouritesContext, {
  FavouritesContextInnerType,
} from "./favourites-context";

const extractFromLocalStorage = () => {
  const items = window.localStorage.getItem("favourites");
  if (items) return JSON.parse(items);
  return items;
};

const FavouritesContextProvider: FC = ({ children }) => {
  const [context, setContext] = useState<FavouritesContextInnerType>({
    favourites: extractFromLocalStorage() ?? [],
  });

  const addFavourite = (pokemon: Pokemon) => {
    setContext((prev) => ({ favourites: [...prev.favourites, pokemon] }));
  };

  const removeFavourite = (name: string) => {
    setContext((prev) => {
      const byName = prev.favourites.map((item) => item.name);
      const index = byName.indexOf(name);
      if (index !== -1) {
        const copy = [...prev.favourites];
        copy.splice(index, 1);
        return { favourites: copy };
      }
      return prev;
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "favourites",
      JSON.stringify(context.favourites)
    );
  }, [context]);

  return (
    <FavouritesContext.Provider
      value={{
        ...context,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
