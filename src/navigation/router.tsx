import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens";
import PokemonList from "../screens/PokemonList/PokemonList";
import NotFound from "../compontents/NotFound";
import PokemonDetails from "../screens/PokemonDetails/PokemonDetails";
import Favorites from "../screens/Favorites/Favorites";

export const router = createBrowserRouter([
  {
    path: Screen.Root,
    element: <PokemonList />,
    errorElement: <NotFound />,
  },
  {
    path: `${Screen.Details}/:pokemonName`,
    element: <PokemonDetails />,
  },
  {
    path: Screen.Favorites,
    element: <Favorites />,
  },
]);
