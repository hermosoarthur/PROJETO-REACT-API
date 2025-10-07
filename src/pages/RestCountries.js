import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';

const RestCountries = ({ onNavigate }) => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      const randomFallback = fallbackCountries[Math.floor(Math.random() * fallbackCountries.length)];
      setCountry(randomFallback);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.apiPage}>
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.h1}>REST Countries</Text>
          <TouchableOpacity onPress={() => onNavigate('home')}>
            <Text style={styles.backButton}>← Voltar para Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.apiContent}>
          <TouchableOpacity 
            onPress={fetchRandomCountry} 
            disabled={loading}
            style={[styles.fetchButton, loading && styles.fetchButtonDisabled]}
          >
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#ffffff" />
                <Text style={styles.fetchButtonText}>🔄 Buscando...</Text>
              </View>
            ) : (
              <Text style={styles.fetchButtonText}>🌍 Buscar País Aleatório</Text>
            )}
          </TouchableOpacity>

          {country && (
            <View style={styles.resultCard}>
              <View style={styles.resultImage}>
                <Image source={{ uri: country.flag }} style={styles.flagImage} />
              </View>
              <View style={styles.resultInfo}>
                <Text style={styles.h2}>{country.name}</Text>
                <View style={styles.infoGrid}>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Capital:</Text>
                    <Text style={styles.infoValue}>{country.capital}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>População:</Text>
                    <Text style={styles.infoValue}>{country.population}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Região:</Text>
                    <Text style={styles.infoValue}>{country.region}</Text>
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
    backgroundColor: '#3498db',
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
    height: 200,
  },
  flagImage: {
    width: '100%',
    height: '100%',
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
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  infoValue: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});

export default RestCountries;