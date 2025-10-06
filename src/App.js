import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RestCountries from './pages/RestCountries';
import PokeAPI from './pages/PokeAPI';
import Developers from './pages/Developers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/restcountries" element={<RestCountries />} />
            <Route path="/api/pokeapi" element={<PokeAPI />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;