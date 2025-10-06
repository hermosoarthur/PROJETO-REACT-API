import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Projeto React </h1>
        <p>Teste diferentes APIs utlizando axios</p>
        
        <div className="api-cards">
          <Link to="/api/restcountries" className="api-card">
            <div className="card-content">
              <h3>REST Countries</h3>
              <p>Explore informações sobre países de todo o mundo</p>
              <span className="card-badge">API 1</span>
            </div>
          </Link>
          
          <Link to="/api/pokeapi" className="api-card">
            <div className="card-content">
              <h3>PokeAPI</h3>
              <p>Descubra Pokémon aleatórios e suas características</p>
              <span className="card-badge">API 2</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;