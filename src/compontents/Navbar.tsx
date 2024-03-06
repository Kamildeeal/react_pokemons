/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/styles.css';
import pokemonSVG from '../images/pokemon-23.svg';
import { Link } from 'react-router-dom';

// type NavbarProps = {
// isOpen?: boolean;
// menuOpen?: boolean;
// isMobile?: boolean;
// overlay?: boolean;
// }

const Navbar: React.FC = () => {

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth >= 1024) {
        setIsHamburgerOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsHamburgerOpen(i => !i);

      const overlay = document.getElementById('overlay');
      if (isHamburgerOpen === false) {
        overlay?.classList.remove('overlayOut')
        overlay?.classList.add('overlay')
      } else {
        overlay?.classList.remove('overlay')
        overlay?.classList.add('overlayOut')
      }
  }
  
  return (
    <>
    <div id='overlay'></div>
    <nav className ="nawbar flex-jc-sb">
      <div className="header__logo">
        <a href='#'>
        <img src={pokemonSVG} alt="pokemon logo"/> 
        </a>
      </div>
      
       
      <a href="#" onClick={toggleMenu} className={` header__menu hide-for-desktop ${isHamburgerOpen ? 'header__menu_open' : ''}`}> 
        <span></span> 
        <span></span>
        <span></span>
      </a>
      {/* <div id="mobile-menu" className={`header__links ${isOpen ? 'open-active' : 'hide-for-mobile'}`}> */}
      <div className={` ${isHamburgerOpen && isMobile ? '' : ('hide-for-mobile header__links')} ${isHamburgerOpen && isMobile ? 'open-active' : ''}`}>
        <a className="open-active_a" href="#">Pokédex</a>
        <a className="open-active_a" href="#">Pokémon news</a>
        <a className="open-active_a" href="#">Blog</a>
        <a className="open-active_a" href="#">Contact</a>
      </div>
      <button className="navBtn hide-for-mobile">
      <span className="background"></span> 
      <span className="text">Click to<br></br>Register</span>
      </button>
      

    </nav>
    </>
    
  );
};

export default Navbar