import React, { useState } from "react";
import getPokemonWithDescription from "services/shakespearSearchService";

type Status = "loading" | "success" | "error" | "idle";

function usePokemonSearch<T>() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<Error | undefined>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);

  const search = (searchKey: string) => {
    setStatus("loading");
    getPokemonWithDescription(searchKey)
      .then((pokemon) => {
        setData(pokemon);
        setStatus("success");
      })
      .catch((e) => {
        setError(e);
        setStatus("error");
      });
  };

  return {
    data,
    status,
    error,
    search,
  };
}
export default usePokemonSearch;
