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
              <Text style={styles.h3}>THE CAT API</Text>
              <Text style={styles.cardP}>Explore informações sobre todos os tipos de gatos</Text>
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
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20, // Adicionado padding no topo
  },
  container: {
    flex: 1,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
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