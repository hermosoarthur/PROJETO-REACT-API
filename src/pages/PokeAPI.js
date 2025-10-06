// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './APIPages.css';

// const PokeAPI = () => {
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchRandomPokemon = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       // Gera um ID aleatório entre 1 e 1010 (atual geração de Pokémon)
//       const randomId = Math.floor(Math.random() * 1010) + 1;
      
//       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
//       const pokemonData = response.data;
      
//       const pokemonInfo = {
//         name: pokemonData.name,
//         abilities: pokemonData.abilities.map(ability => ability.ability.name),
//         types: pokemonData.types.map(type => type.type.name),
//         sprite: pokemonData.sprites.other['official-artwork']?.front_default || 
//                 pokemonData.sprites.front_default ||
//                 'https://via.placeholder.com/200x200?text=Pokemon+Image',
//         height: pokemonData.height,
//         weight: pokemonData.weight,
//         id: pokemonData.id
//       };
      
//       setPokemon(pokemonInfo);
//     } catch (err) {
//       setError('Erro ao buscar dados do Pokémon. Tente novamente.');
//       console.error('Erro:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Função para capitalizar a primeira letra
//   const capitalizeFirst = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//   return (
//     <div className="api-page">
//       <div className="container">
//         <div className="page-header">
//           <h1>PokeAPI</h1>
//           <Link to="/" className="back-button">← Voltar para Home</Link>
//         </div>

//         <div className="api-content">
//           <button 
//             onClick={fetchRandomPokemon} 
//             disabled={loading}
//             className="fetch-button"
//           >
//             {loading ? 'Buscando Pokémon...' : 'Buscar Pokémon Aleatório'}
//           </button>

//           {error && <div className="error-message">{error}</div>}

//           {pokemon && (
//             <div className="result-card">
//               <div className="result-image">
//                 <img 
//                   src={pokemon.sprite} 
//                   alt={pokemon.name}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/200x200?text=Pokemon+Not+Found';
//                   }}
//                 />
//                 <div className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</div>
//               </div>
//               <div className="result-info">
//                 <h2>{capitalizeFirst(pokemon.name)}</h2>
//                 <div className="info-grid">
//                   <div className="info-item">
//                     <strong>Habilidades:</strong>
//                     <span>{pokemon.abilities.map(capitalizeFirst).join(', ')}</span>
//                   </div>
//                   <div className="info-item">
//                     <strong>Tipos:</strong>
//                     <span>{pokemon.types.map(capitalizeFirst).join(', ')}</span>
//                   </div>
//                   <div className="info-item">
//                     <strong>Altura:</strong>
//                     <span>{(pokemon.height / 10).toFixed(1)} m</span>
//                   </div>
//                   <div className="info-item">
//                     <strong>Peso:</strong>
//                     <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

          
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PokeAPI;


import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';

const PokeAPI = ({ onNavigate }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomPokemon = async () => {
    setLoading(true);
    setError('');
    try {
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

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <ScrollView style={styles.apiPage}>
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.h1}>PokeAPI</Text>
          <TouchableOpacity onPress={() => onNavigate('home')}>
            <Text style={styles.backButton}>← Voltar para Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.apiContent}>
          <TouchableOpacity 
            onPress={fetchRandomPokemon} 
            disabled={loading}
            style={[styles.fetchButton, loading && styles.fetchButtonDisabled]}
          >
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#ffffff" />
                <Text style={styles.fetchButtonText}>Buscando Pokémon...</Text>
              </View>
            ) : (
              <Text style={styles.fetchButtonText}>Buscar Pokémon Aleatório</Text>
            )}
          </TouchableOpacity>

          {error && (
            <View style={styles.errorMessage}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {pokemon && (
            <View style={styles.resultCard}>
              <View style={styles.resultImage}>
                <Image 
                  source={{ uri: pokemon.sprite }} 
                  style={styles.pokemonImage}
                />
                <View style={styles.pokemonId}>
                  <Text style={styles.pokemonIdText}>#{pokemon.id.toString().padStart(3, '0')}</Text>
                </View>
              </View>
              <View style={styles.resultInfo}>
                <Text style={styles.h2}>{capitalizeFirst(pokemon.name)}</Text>
                <View style={styles.infoGrid}>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Habilidades:</Text>
                    <Text style={styles.infoValue}>{pokemon.abilities.map(capitalizeFirst).join(', ')}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Tipos:</Text>
                    <Text style={styles.infoValue}>{pokemon.types.map(capitalizeFirst).join(', ')}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Altura:</Text>
                    <Text style={styles.infoValue}>{(pokemon.height / 10).toFixed(1)} m</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Peso:</Text>
                    <Text style={styles.infoValue}>{(pokemon.weight / 10).toFixed(1)} kg</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  apiPage: {
    paddingVertical: 32,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  container: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 32,
  },
  pageHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  h1: {
    fontSize: 48,
    marginBottom: 16,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backButton: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: '500',
  },
  apiContent: {
    alignItems: 'center',
  },
  fetchButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    minWidth: 200,
  },
  fetchButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fetchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    width: '100%',
    maxWidth: 400,
  },
  errorText: {
    color: '#721c24',
    fontSize: 14,
    textAlign: 'center',
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 0,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  resultImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  pokemonId: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pokemonIdText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  resultInfo: {
    padding: 24,
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoGrid: {
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#7f8c8d',
    flex: 1,
    textAlign: 'right',
  },
});

export default PokeAPI;