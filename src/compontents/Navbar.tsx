import React from "react";
import "../styles/styles.css";
import pokemonSVG from "../images/pokemon-23.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import LinkNavbar from "./LinkNavbar";

const Navbar = () => {
  const { toggleMenu, isMobile, isMenuOpen } = useWindowDimensions();

  return (
    <>
      <div className={isMenuOpen ? "overlay" : "overlayOut"}></div>
      <nav className="navbar flex-jc-sb">
        <div className="header__logo">
          <a href="#">
            <img src={pokemonSVG} alt="pokemon logo" />
          </a>
        </div>

        <a
          href="#"
          onClick={toggleMenu}
          className={` header__menu hide-for-desktop ${
            isMenuOpen ? "header__menu_open" : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div
          className={` ${
            isMenuOpen && isMobile ? "" : "hide-for-mobile header__links"
          } ${isMenuOpen && isMobile ? "open-active" : ""}`}
        >
          <LinkNavbar>Pokédex</LinkNavbar>
          <LinkNavbar>Pokémon news</LinkNavbar>
          <LinkNavbar>Blog</LinkNavbar>
          <LinkNavbar>Contact</LinkNavbar>
        </div>
        <button className="navBtn hide-for-mobile">
          <span className="background"></span>
          <span className="text">
            Click to<br></br>Register
          </span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
