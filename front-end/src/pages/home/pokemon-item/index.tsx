import { Pokemon } from "models/pokemon";
import React, { FC } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as StarIcon } from "assets/star-icon.svg";
import classNames from "classnames";

interface PokemonItemProps {
  pokemon: Pokemon;
  starred?: boolean;
  onStar: (arg: Pokemon) => void;
  onUnStar: (arg: Pokemon) => void;
}
const PokemonItem: FC<PokemonItemProps> = ({
  pokemon,
  starred = false,
  onStar,
}) => {
  return (
    <div className={styles.pokemon_item}>
      <p>{pokemon.name}</p>
      <p>{pokemon.description}</p>
      <button
        onClick={() => onStar(pokemon)}
        className={styles.pokemon_item__star_btn}
      >
        <StarIcon
          className={classNames(
            styles.pokemon_item__star,
            starred && styles["pokemon_item__star--active"]
          )}
        />
      </button>
    </div>
  );
};
export default PokemonItem;
