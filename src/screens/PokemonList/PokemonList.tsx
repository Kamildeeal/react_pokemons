import React, { useCallback } from "react";
import "../../styles/styles.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePokemonList } from "./usePokemonList";
import { Screen } from "../../navigation/screens";

const PokemonList = () => {
  const {
    handleInputChange,
    inputText,
    handlePageClick,
    notify,
    loading,
    toggleFavorite,
    favorites,
    addLeadingZero,
    navigate,
    filteredAndSlicedPokemon,
    filteredPokemon,
    itemsPerPage,
  } = usePokemonList();

  const renderPokemonList = useCallback(() => {
    return filteredAndSlicedPokemon.map((item) => (
      <Link
        key={item.id}
        to={`${Screen.Details}/${item.name}`}
        className="detailsLink"
      >
        <div key={item.id} className="pokemonContainer">
          <h2>
            {addLeadingZero(item)} {item.name}
          </h2>
          <button
            onClick={(e) => {
              notify(item.name);
              e.preventDefault();
              toggleFavorite(item.name);
            }}
          >
            {favorites.includes(item.name) ? "❤️" : "🤍"}
          </button>
          <img src={item.sprites.front_default} alt="logo" />
        </div>
      </Link>
    ));
  }, [
    addLeadingZero,
    notify,
    toggleFavorite,
    favorites,
    filteredAndSlicedPokemon,
  ]);

  return (
    <div>
      <Link className="customLink" to={Screen.Favorites}>
        Favorites
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

        <div className="pokemonList">
          {loading ? <h1>Loading...</h1> : renderPokemonList()}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={Math.ceil(filteredPokemon.length / itemsPerPage)}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeClassName="active"
        />

        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          onClick={() => navigate(Screen.Favorites)}
        />
      </div>
    </div>
  );
};

export default PokemonList;
