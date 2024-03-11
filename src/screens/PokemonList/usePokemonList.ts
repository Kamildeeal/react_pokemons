import { useEffect, useState } from "react";
import { usePokemonContext } from "../../providers/Pokemon/PokemonContext";
import { Pokemon } from "../../types/pokemon";
import toast from "react-hot-toast";

export const usePokemonList = () => {
  const [currentItems, setCurrentItems] = useState<Pokemon[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");
  const itemsPerPage: number = 20;

  const {
    data: pokemon,
    loading,
    toggleFavorite,
    favorites,
  } = usePokemonContext();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = pokemon.slice(itemOffset, endOffset);
    setCurrentItems(currentItems);

    const pageCount = Math.ceil(pokemon.length / itemsPerPage);
    setPageCount(pageCount);
  }, [itemOffset, itemsPerPage, pokemon]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pokemon.length;
    setItemOffset(newOffset);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.toLowerCase();
    setInputText(text);
    setItemOffset(0);
  };

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(inputText)
  );

  const notify = (pokemonName: any) => {
    if (favorites.includes(pokemonName)) {
      toast(`Pokemon ${pokemonName} removed from favorites!`);
    } else {
      toast(`Pokemon ${pokemonName} added to favorites!`);
    }
  };

  return {
    handleInputChange,
    inputText,
    handlePageClick,
    pageCount,
    filteredPokemon,
    itemOffset,
    itemsPerPage,
    notify,
    loading,
    toggleFavorite,
    favorites,
  };
};
