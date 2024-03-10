import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens";
import PokemonList from "../compontents/PokemonList/PokemonList";
import NotFound from "../compontents/NotFound";
import PokemonDetails from "../compontents/PokemonDetails";
import Favourite from "../compontents/Favourites";

export const router = createBrowserRouter([
  {
    path: Screen.Root,
    element: <PokemonList />,
    errorElement: <NotFound />,
  },
  {
    path: Screen.Details,
    element: <PokemonDetails />,
  },
  {
    path: "/details/:pokemonName",
    element: <PokemonDetails />,
  },
  {
    path: Screen.Favorites,
    element: <Favourite />,
  },
]);
