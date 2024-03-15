import React, { useCallback } from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import { Screen } from "../../navigation/screens";
import { useFavorites } from "./useFavorites";
import { Pokemon } from "../../types/pokemon";

const Favourite = () => {
  const { pokemon, isFavoritesEmpty, onRemove, getPokemonType, favorites } =
    useFavorites();

  const renderPokemon = useCallback(
    (pokemon: Pokemon) => {
      return (
        <div
          key={pokemon.id}
          className="displayedPokemon"
          style={{
            backgroundColor: getPokemonType(pokemon.types[0].type.name),
          }}
        >
          <div className="nameImg">
            <p>{pokemon.name.toUpperCase()}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div className="wrapperTypesAbilities">
            <div className="nameTypes">
              <h3>Types:</h3>
              <ul>
                {pokemon.types.map(
                  (type: { type: { name: string } }, index: number) => (
                    <li key={index}>{type.type.name}</li>
                  )
                )}
              </ul>
            </div>
            <div className="nameAbilities">
              <h3>Abilities:</h3>
              <ul>
                {pokemon.abilities.map(
                  (ability: { ability: { name: string } }, index: number) => (
                    <li key={index}>{ability.ability.name}</li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="nameStats">
            <h3>Stats:</h3>
            <ul>
              {pokemon.stats.map((stat: any, index: number) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => onRemove(pokemon.name)}
            className="crossContainer"
          >
            <div className="cross">❌</div>
          </div>
        </div>
      );
    },
    [onRemove, getPokemonType]
  );

  return (
    <div className="favoritesPage">
      <h1>Favourite Pokemons</h1>
      <Link className="goBackLink" to={Screen.Root}>
        ⬅️ Go to Pokemon List
      </Link>
      {isFavoritesEmpty(favorites) ? (
        <p>No favorite pokemons added yet.</p>
      ) : (
        pokemon.map((displayedPokemon) => renderPokemon(displayedPokemon))
      )}
    </div>
  );
};

export default Favourite;
