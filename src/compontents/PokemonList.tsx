
import React from 'react';
import '../styles/styles.css'
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Favourite from './Favourites';
import TextField from "@mui/material/TextField";




interface PokemonListProps {
    favorites: { name: string }[];
    pokemon: Pokemon[] | any[];
    loading: boolean | undefined;
    toggleFavorite: (pokemonName: string) => void;
};


interface Pokemon {
    favorites: { name: string }[];
    name: string;
    id: number;
    sprites: {
        front_default: string;
    }
}
                
const PokemonList: React.FC<PokemonListProps> = ({ pokemon, loading, toggleFavorite, favorites}) => {
    
    const [currentItems, setCurrentItems] = useState<Pokemon[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState<number>(0);
    const [inputText, setInputText] = useState<string>('');
    const itemsPerPage: number = 20;


    useEffect(() => {
        
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = pokemon.slice(itemOffset, endOffset);
        setCurrentItems(currentItems);

        const pageCount = Math.ceil(pokemon.length / itemsPerPage);
        setPageCount(pageCount)
    },[itemOffset, itemsPerPage, pokemon])

    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % pokemon.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
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

    
    return (


        <div>
            <Link className="customLink" to="/favourites">
                Favourites
            </Link>
            <div className='content'>
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
                activeLinkClassName="active"
            />
            <div className='pokemonList'>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                    filteredPokemon.slice(itemOffset, itemOffset + itemsPerPage).map((item) => (
                            <Link key={item.id} to={`/details/${item.name}`} className='detailsLink'>
                            <div key={item.id} className="pokemonContainer">
                                <h2>
                                    {item.id < 10
                                        ? '00' + item.id
                                        : item.id < 100
                                        ? '0' + item.id
                                        : item.id}{' '}
                                    {item.name}
                                </h2>
                                <button onClick={(e) => { 
                                    e.preventDefault(); 
                                    toggleFavorite(item.name); }}>
                                
                                {favorites.includes(item.name) ? '❤️'  : '🤍'}
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
                activeLinkClassName="active"

            />
            
            </div>
        </div>
    )
}

export default PokemonList