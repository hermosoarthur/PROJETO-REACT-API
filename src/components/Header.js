import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">Testes de APIs</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/developers">Desenvolvedores</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;