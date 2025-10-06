// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home">
//       <div className="container">
//         <h1>Projeto React </h1>
//         <p>Teste diferentes APIs utlizando axios</p>
        
//         <div className="api-cards">
//           <Link to="/api/restcountries" className="api-card">
//             <div className="card-content">
//               <h3>REST Countries</h3>
//               <p>Explore informações sobre países de todo o mundo</p>
//               <span className="card-badge">API 1</span>
//             </div>
//           </Link>
          
//           <Link to="/api/pokeapi" className="api-card">
//             <div className="card-content">
//               <h3>PokeAPI</h3>
//               <p>Descubra Pokémon aleatórios e suas características</p>
//               <span className="card-badge">API 2</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Home = ({ onNavigate }) => {
  return (
    <ScrollView style={styles.home}>
      <View style={styles.container}>
        <Text style={styles.h1}>Projeto React</Text>
        <Text style={styles.p}>Teste diferentes APIs utilizando axios</Text>
        
        <View style={styles.separator} />
        
        <View style={styles.apiCards}>
          <TouchableOpacity 
            style={styles.apiCard}
            onPress={() => onNavigate('restcountries')}
          >
            <View style={styles.cardContent}>
              <Text style={styles.h3}>REST Countries</Text>
              <Text style={styles.cardP}>Explore informações sobre países de todo o mundo</Text>
              <View style={styles.cardBadge}>
                <Text style={styles.badgeText}>API 1</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.apiCard}
            onPress={() => onNavigate('pokeapi')}
          >
            <View style={styles.cardContent}>
              <Text style={styles.h3}>PokeAPI</Text>
              <Text style={styles.cardP}>Descubra Pokémon aleatórios e suas características</Text>
              <View style={styles.cardBadge}>
                <Text style={styles.badgeText}>API 2</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.apiCard}
            onPress={() => onNavigate('developers')}
          >
            <View style={styles.cardContent}>
              <Text style={styles.h3}>Desenvolvedores</Text>
              <Text style={styles.cardP}>Conheça a equipe de desenvolvimento do projeto</Text>
              <View style={styles.cardBadge}>
                <Text style={styles.badgeText}>Time</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    paddingVertical: 32,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  container: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  h1: {
    fontSize: 48,
    marginBottom: 16,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  p: {
    fontSize: 20,
    color: '#7f8c8d',
    marginBottom: 32,
    textAlign: 'center',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 48,
  },
  apiCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 32,
    width: '100%',
  },
  apiCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 32,
    minWidth: 300,
    flex: 1,
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardContent: {
    // Conteúdo do card
  },
  h3: {
    fontSize: 24,
    marginBottom: 16,
    color: '#2c3e50',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardP: {
    color: '#7f8c8d',
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  cardBadge: {
    backgroundColor: '#3498db',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Home;