import StatusError from "models/status-error";

const getPokemonWithDescription = async (pokemonName: string) => {
  const response = await fetch(`http://localhost:5000/pokemon/${pokemonName}`);
  if (response.status >= 300) {
    throw new StatusError(response.status, response.statusText);
  }
  return response.json();
};
export default getPokemonWithDescription;
