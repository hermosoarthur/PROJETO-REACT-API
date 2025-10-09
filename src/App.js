import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Developers from './pages/Developers/Developers';
import RestCountries from './pages/Cat';
import PokeAPI from './pages/PokeAPI';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'developers':
        return <Developers onNavigate={setCurrentScreen} />;
      case 'restcountries':
        return <RestCountries onNavigate={setCurrentScreen} />;
      case 'pokeapi':
        return <PokeAPI onNavigate={setCurrentScreen} />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
      <View style={styles.app}>
        <Header onNavigate={setCurrentScreen} currentScreen={currentScreen} />
        <View style={styles.content}>
          {renderScreen()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  app: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
});

export default App;