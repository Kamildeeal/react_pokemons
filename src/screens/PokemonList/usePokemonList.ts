import { useEffect, useState } from "react";
import { usePokemonContext } from "../../providers/Pokemon/PokemonContext";
import { Pokemon } from "../../types/pokemon";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const usePokemonList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    addLeadingZero,
  } = usePokemonContext();

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(inputText)
  );
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = pokemon.slice(itemOffset, endOffset);
    setCurrentItems(currentItems);

    const pageCount = Math.ceil(filteredPokemon.length / itemsPerPage);
    setPageCount(pageCount);
  }, [itemOffset, itemsPerPage, pokemon, filteredPokemon.length]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pokemon.length;
    setItemOffset(newOffset);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.toLowerCase();
    setInputText(text);
    setItemOffset(0);
  };

  const notify = (pokemonName: string) => {
    if (favorites.includes(pokemonName)) {
      toast(`Pokemon ${pokemonName} removed from favorites!`);
    } else {
      toast(
        `Pokemon ${pokemonName} added to favorites! Click to move to the list`
      );
    }
  };

  const navigate = useNavigate();

  const filteredAndSlicedPokemon = filteredPokemon.slice(
    itemOffset,
    itemOffset + itemsPerPage
  );

  return {
    handleInputChange,
    inputText,
    handlePageClick,
    pageCount,
    notify,
    toast,
    loading,
    toggleFavorite,
    favorites,
    addLeadingZero,
    navigate,
    filteredAndSlicedPokemon,
    filteredPokemon,
    itemsPerPage,
  };
};
