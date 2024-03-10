import React from "react";
import "../../styles/styles.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Favourite from "../Favourites";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePokemonContext } from "../../providers/Pokemon/PokemonContext";
import { usePokemonList } from "./usePokemonList";

interface Pokemon {
  favorites: string[];
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
}

const PokemonList = () => {
  const {
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
  } = usePokemonList();

  return (
    <div>
      <Link className="customLink" to="/favourites">
        Favourites
      </Link>
      <div className="content">
        <div className="search">
          <h1>#100 Pokemons from Pokedex!</h1>
          <TextField
            id="outlined-basic"
            onChange={handleInputChange}
            value={inputText}
            variant="outlined"
            label="type Pokemon name"
          />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          // activeLinkClassName="active"
          activeClassName="active"
        />
        <div className="pokemonList">
          {loading ? (
            <h1>Loading</h1>
          ) : (
            filteredPokemon
              .slice(itemOffset, itemOffset + itemsPerPage)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/details/${item.name}`}
                  className="detailsLink"
                >
                  <div key={item.id} className="pokemonContainer">
                    <h2>
                      {item.id < 10
                        ? "00" + item.id
                        : item.id < 100
                        ? "0" + item.id
                        : item.id}{" "}
                      {item.name}
                    </h2>
                    <button
                      onClick={(e) => {
                        {
                          notify(item.name);
                        }
                        e.preventDefault();
                        toggleFavorite(item.name);
                      }}
                    >
                      {favorites.includes(item.name) ? "❤️" : "🤍"}
                    </button>
                    <img src={item.sprites.front_default} alt="logo" />
                  </div>
                </Link>
              ))
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeClassName="active"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default PokemonList;
