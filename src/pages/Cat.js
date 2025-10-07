import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';

const CatApi = ({ onNavigate }) => {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  //caso de falha
  const fallbackCats = [
    {
      name: "Gato Siamês",
      description: "Um gato elegante e sociável, conhecido pelos olhos azuis e pelagem clara.",
      image: "https://cdn2.thecatapi.com/images/ai6Jps4sx.jpg",
      origin: "Tailândia"
    },
    {
      name: "Gato Persa",
      description: "Um dos mais populares, com pelo longo e personalidade calma.",
      image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
      origin: "Irã"
    },
    {
      name: "Maine Coon",
      description: "Grande, peludo e amigável, conhecido como o ‘gigante gentil’.",
      image: "https://cdn2.thecatapi.com/images/duv.jpg",
      origin: "Estados Unidos"
    }
  ];

  // buscar gato aleatório com nome e descrição
  const fetchRandomCat = async () => {
    setLoading(true);
    try {
      //  as raças disponíveis
      const breedsResponse = await axios.get('https://api.thecatapi.com/v1/breeds');
      const breeds = breedsResponse.data;

      // escolher uma raça aleatória
      const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];

      // buscar imagem dessa raça
      const imageResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${randomBreed.id}`);
      const imageUrl = imageResponse.data[0]?.url;

      const catData = {
        name: randomBreed.name,
        description: randomBreed.description,
        image: imageUrl,
        origin: randomBreed.origin
      };

      setCat(catData);
    } catch (err) {
      console.log('API falhou, usando gato de fallback...');
      const randomFallback = fallbackCats[Math.floor(Math.random() * fallbackCats.length)];
      setCat(randomFallback);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.apiPage}>
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.h1}>🐱 API de Gatos</Text>
          <TouchableOpacity onPress={() => onNavigate('home')}>
            <Text style={styles.backButton}>← Voltar para Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.apiContent}>
          <TouchableOpacity
            onPress={fetchRandomCat}
            disabled={loading}
            style={[styles.fetchButton, loading && styles.fetchButtonDisabled]}
          >
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#ffffff" />
                <Text style={styles.fetchButtonText}>🔄 Buscando...</Text>
              </View>
            ) : (
              <Text style={styles.fetchButtonText}>🐾 Buscar Gato Aleatório</Text>
            )}
          </TouchableOpacity>

          {cat && (
            <View style={styles.resultCard}>
              <Image source={{ uri: cat.image }} style={styles.catImage} />
              <View style={styles.resultInfo}>
                <Text style={styles.h2}>{cat.name}</Text>
                <Text style={styles.infoText}><Text style={styles.label}>Origem:</Text> {cat.origin}</Text>
                <Text style={styles.description}>{cat.description}</Text>
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
    alignSelf: 'center',
    paddingHorizontal: 32,
  },
  pageHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  h1: {
    fontSize: 42,
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
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  catImage: {
    width: '100%',
    height: 250,
  },
  resultInfo: {
    padding: 20,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color: '#7f8c8d',
    marginTop: 8,
  },
});

export default CatApi;
