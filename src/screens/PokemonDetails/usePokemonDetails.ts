import { usePokemonContext } from "../../providers/Pokemon/PokemonContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Screen } from "../../navigation/screens";

export const usePokemonDetails = () => {
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
      navigate(`${Screen.Details}/${pokemon[currentPokemonIndex + 1].name}`);
    }
  };
  const goToPreviousPokemon = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex((prevIndex) => prevIndex - 1);
      navigate(`${Screen.Details}/${pokemon[currentPokemonIndex - 1].name}`);
    }
  };
  const currentPokemon = pokemon[currentPokemonIndex];
  const abilites = currentPokemon.abilities.map(
    (ability) => ability.ability.name
  );

  const types = currentPokemon.types.map((type) => type.type.name);

  return {
    params,
    navigate,
    currentPokemonIndex,
    goToNextPokemon,
    goToPreviousPokemon,
    abilites,
    types,
    currentPokemon,
    loading,
  };
};
