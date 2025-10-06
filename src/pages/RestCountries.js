import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './APIPages.css';

const RestCountries = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Lista de países de fallback caso a API falhe
  const fallbackCountries = [
    {
      name: "Brasil",
      capital: "Brasília",
      flag: "https://flagcdn.com/w320/br.png",
      population: "213.993.437",
      region: "Americas",
      area: "8.515.767 km²"
    },
    {
      name: "Estados Unidos",
      capital: "Washington D.C.",
      flag: "https://flagcdn.com/w320/us.png",
      population: "329.484.123",
      region: "Americas",
      area: "9.833.520 km²"
    },
    {
      name: "Japão",
      capital: "Tóquio",
      flag: "https://flagcdn.com/w320/jp.png",
      population: "125.836.021",
      region: "Asia",
      area: "377.975 km²"
    }
  ];

  const fetchRandomCountry = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Tenta a API principal primeiro
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data;
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      
      const countryData = {
        name: randomCountry.name?.common || 'N/A',
        capital: randomCountry.capital?.[0] || 'N/A',
        flag: randomCountry.flags?.png || '',
        population: randomCountry.population ? randomCountry.population.toLocaleString('pt-BR') : 'N/A',
        region: randomCountry.region || 'N/A'
      };
      
      setCountry(countryData);
      
    } catch (err) {
      console.log('API falhou, usando dados de fallback...');
      // Se a API falhar, usa dados de fallback
      const randomFallback = fallbackCountries[Math.floor(Math.random() * fallbackCountries.length)];
      setCountry(randomFallback);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-page">
      <div className="container">
        <div className="page-header">
          <h1>REST Countries</h1>
          <Link to="/" className="back-button">← Voltar para Home</Link>
        </div>

        <div className="api-content">
          <button 
            onClick={fetchRandomCountry} 
            disabled={loading}
            className="fetch-button"
          >
            {loading ? '🔄 Buscando...' : '🌍 Buscar País Aleatório'}
          </button>

          {country && (
            <div className="result-card">
              <div className="result-image">
                <img src={country.flag} alt={`Bandeira do ${country.name}`} />
              </div>
              <div className="result-info">
                <h2>{country.name}</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>Capital:</strong>
                    <span>{country.capital}</span>
                  </div>
                  <div className="info-item">
                    <strong>População:</strong>
                    <span>{country.population}</span>
                  </div>
                  <div className="info-item">
                    <strong>Região:</strong>
                    <span>{country.region}</span>
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

export default RestCountries;