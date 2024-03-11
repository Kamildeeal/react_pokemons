import React from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import { usePokemonDetails } from "./usePokemonDetails";
import { Screen } from "../../navigation/screens";

const PokemonDetails = () => {
  const {
    params,
    navigate,
    currentPokemonIndex,
    goToNextPokemon,
    goToPreviousPokemon,
    abilites,
    types,
    currentPokemon,
    loading,
  } = usePokemonDetails();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentPokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="container">
      <section className="details">
        <div>
          <button onClick={goToPreviousPokemon}>&larr; Previous Pokemon</button>
        </div>
        <div className="pokemonDetailsContainter">
          <h2>
            {currentPokemon.id < 10
              ? "00" + currentPokemon.id
              : currentPokemon.id < 100
              ? "0" + currentPokemon.id
              : currentPokemon.id}{" "}
            {currentPokemon.name}
          </h2>
          <img src={currentPokemon.sprites.front_default} alt="logo" />
          <p>Abilities: {abilites.join(", ")}</p>
          <p>Types: {types.join(", ")}</p>
        </div>
        <button onClick={goToNextPokemon}>Next Pokemon &rarr;</button>
      </section>
      <Link className="goBackLink" to={Screen.Root}>
        Go to Pokemon List
      </Link>
    </div>
  );
};

export default PokemonDetails;
