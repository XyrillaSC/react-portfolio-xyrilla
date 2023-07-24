import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Project-Gal';
import Contact from './components/Contact-Form';
import Footer from './components/Footer';
import './styles/App.css'


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
