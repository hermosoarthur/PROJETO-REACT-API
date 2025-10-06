import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './APIPages.css';

const PokeAPI = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomPokemon = async () => {
    setLoading(true);
    setError('');
    try {
      // Gera um ID aleatório entre 1 e 1010 (atual geração de Pokémon)
      const randomId = Math.floor(Math.random() * 1010) + 1;
      
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const pokemonData = response.data;
      
      const pokemonInfo = {
        name: pokemonData.name,
        abilities: pokemonData.abilities.map(ability => ability.ability.name),
        types: pokemonData.types.map(type => type.type.name),
        sprite: pokemonData.sprites.other['official-artwork']?.front_default || 
                pokemonData.sprites.front_default ||
                'https://via.placeholder.com/200x200?text=Pokemon+Image',
        height: pokemonData.height,
        weight: pokemonData.weight,
        id: pokemonData.id
      };
      
      setPokemon(pokemonInfo);
    } catch (err) {
      setError('Erro ao buscar dados do Pokémon. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  // Função para capitalizar a primeira letra
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="api-page">
      <div className="container">
        <div className="page-header">
          <h1>PokeAPI</h1>
          <Link to="/" className="back-button">← Voltar para Home</Link>
        </div>

        <div className="api-content">
          <button 
            onClick={fetchRandomPokemon} 
            disabled={loading}
            className="fetch-button"
          >
            {loading ? 'Buscando Pokémon...' : 'Buscar Pokémon Aleatório'}
          </button>

          {error && <div className="error-message">{error}</div>}

          {pokemon && (
            <div className="result-card">
              <div className="result-image">
                <img 
                  src={pokemon.sprite} 
                  alt={pokemon.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x200?text=Pokemon+Not+Found';
                  }}
                />
                <div className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</div>
              </div>
              <div className="result-info">
                <h2>{capitalizeFirst(pokemon.name)}</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>Habilidades:</strong>
                    <span>{pokemon.abilities.map(capitalizeFirst).join(', ')}</span>
                  </div>
                  <div className="info-item">
                    <strong>Tipos:</strong>
                    <span>{pokemon.types.map(capitalizeFirst).join(', ')}</span>
                  </div>
                  <div className="info-item">
                    <strong>Altura:</strong>
                    <span>{(pokemon.height / 10).toFixed(1)} m</span>
                  </div>
                  <div className="info-item">
                    <strong>Peso:</strong>
                    <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          
          
        </div>
      </div>
    </div>
  );
};

export default PokeAPI;