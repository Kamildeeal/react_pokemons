import { usePokemonContext } from "../../providers/Pokemon/PokemonContext";

export const useFavorites = () => {
  const {
    favorites: favorites,
    data,
    removeFromFavorites: onRemove,
  } = usePokemonContext();

  const pokemon = data.filter((poke: { name: string }) =>
    favorites.includes(poke.name)
  );

  const isFavoritesEmpty = favorites.length === 0;

  const getPokemonType = (typeName: string): string => {
    switch (typeName) {
      case "grass":
        return "#78C850";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      default:
        return "#A8A878";
    }
  };

  return {
    pokemon,
    isFavoritesEmpty,
    favorites,
    data,
    onRemove,
    getPokemonType,
  };
};
