import React from "react";
import { Pokemon } from "../../types/pokemon";

type State = {
  data: Pokemon[];
  loading: boolean;
  favorites: string[];
  toggleFavorite: (pokemonName: string) => void;
  removeFromFavorites: (pokemonName: string) => void;
  addLeadingZero: (item: { id: number }) => string;
};

export const PokemonContext = React.createContext<State>({
  data: [],
  loading: false,
  favorites: [],
  toggleFavorite: () => null,
  removeFromFavorites: () => null,
  addLeadingZero: () => "",
});

export const usePokemonContext = () => React.useContext(PokemonContext);
