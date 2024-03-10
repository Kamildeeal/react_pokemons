import React from "react";

type State = {
  data: any[];
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
