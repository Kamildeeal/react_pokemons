import React from 'react';
import '../styles/styles.css'
import Navbar  from './Navbar'


const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

export default Header