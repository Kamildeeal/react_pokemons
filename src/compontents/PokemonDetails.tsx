import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { usePokemonContext } from "../providers/Pokemon/PokemonContext";

interface Pokemon {
  name: string;
  types: object[];
  abilities: object[];
  id: number;
  sprites: {
    front_default: string;
  };
}

const PokemonDetails = () => {
  const { data: pokemon, loading } = usePokemonContext();

  const params = useParams<{ pokemonName: string }>();
  const navigate = useNavigate();
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState<number>(0);

  useEffect(() => {
    const foundPokemonIndex = pokemon.findIndex(
      (p) => p.name === params.pokemonName
    );
    setCurrentPokemonIndex(foundPokemonIndex !== -1 ? foundPokemonIndex : 0);
  }, [pokemon, params.pokemonName]);

  const goToNextPokemon = () => {
    if (currentPokemonIndex < pokemon.length - 1) {
      setCurrentPokemonIndex((prevIndex) => prevIndex + 1);
      navigate(`/details/${pokemon[currentPokemonIndex + 1].name}`);
    }
  };

  const goToPreviousPokemon = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex((prevIndex) => prevIndex - 1);
      navigate(`/details/${pokemon[currentPokemonIndex - 1].name}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentPokemon = pokemon[currentPokemonIndex];
  if (!currentPokemon) {
    return <div>Pokemon not found</div>;
  }

  // const abilities = currentPokemon.abilities.map(ability => ability.ability.name);
  // pokemonAbilities.textContent = `Abilities: ${abilities.join(', ')}`;
  // const abilties = currentPokemon.abilities.map(ability) => ability.ability.name
  const abilites = currentPokemon.abilities.map(
    (ability: any) => ability.ability.name
  );

  const types = currentPokemon.types.map((type: any) => type.type.name);

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
      <Link className="goBackLink" to="/">
        Go to Pokemon List
      </Link>
    </div>
  );
};

export default PokemonDetails;
