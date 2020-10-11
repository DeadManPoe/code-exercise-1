import { useContext } from "react";
import Context from "./favourites-context";

const useFavouritesContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error("context is null");
  return context;
};
export default useFavouritesContext;
