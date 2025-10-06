// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import RestCountries from './pages/RestCountries';
// import PokeAPI from './pages/PokeAPI';
// import Developers from './pages/Developers';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/api/restcountries" element={<RestCountries />} />
//             <Route path="/api/pokeapi" element={<PokeAPI />} />
//             <Route path="/developers" element={<Developers />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js - SIMPLIFICADO

import React from 'react';
import { View, StyleSheet } from 'react-native';

// Import das páginas
import Home from './pages/Home/Home';
import Developers from './pages/Developers/Developers';
import RestCountries from './pages/RestCountries';
import PokeAPI from './pages/PokeAPI';

function App() {
  // Estado para controlar a tela atual
  const [currentScreen, setCurrentScreen] = React.useState('home');

  // Função para renderizar a tela baseada no estado
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
    <View style={styles.app}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default App;