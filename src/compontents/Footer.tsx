/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/styles.css";
import logo from "../images/logo.jpg";
import facebookLogo from "../images/icon-facebook.svg";
import twitterLogo from "../images/icon-twitter.svg";
import youtubeLogo from "../images/icon-youtube.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__logo" src={logo} alt="pokemon-signature" />
      </div>
      <div className="footer__social-media">
        <div>
          <img src={facebookLogo} alt="icon-facebook" />
        </div>
        <div>
          <img src={twitterLogo} alt="icon-twitter" />
        </div>
        <div>
          <img src={youtubeLogo} alt="icon-youtube" />
        </div>
      </div>
      <div className="footer__links col1">
        <div>About Us</div>
        <div>Contact</div>
        <div>Blog</div>
      </div>
      <div className="footer__links col2">
        <div>Support</div>
        <div>Fan Club</div>
        <div>Privacy Policy</div>
      </div>
      <div className="footer__cta">
        <button className="footer__button">
          <span>JOIN</span>
        </button>
        <div className="footer__copyright">
          &copy; Pokemon. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
