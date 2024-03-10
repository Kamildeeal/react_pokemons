import React from "react";
import { Pokemon } from "../../types/pokemon";

type State = {
  data: Pokemon[];
  loading: boolean;
  favorites: string[];
  toggleFavorite: (pokemonName: string) => void;
  removeFromFavorites: (pokemonName: string) => void;
};

export const PokemonContext = React.createContext<State>({
  data: [],
  loading: false,
  favorites: [],
  toggleFavorite: () => null,
  removeFromFavorites: () => null,
});

export const usePokemonContext = () => React.useContext(PokemonContext);
