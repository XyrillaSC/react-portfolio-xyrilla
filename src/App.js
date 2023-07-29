import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Project-Gal';
import Contact from './components/Contact-Form';
import Footer from './components/Footer';
import './styles/App.css'


function App() {
  const [page, setPage] = useState(<About />);

  const handleAboutClick = () => {
    setPage(<About />);
  };

  const handleGalleryClick = () => {
    setPage(<Gallery />);
  };

  const handleContactClick = () => {
    setPage(<Contact />);
  };

  return (
    <div>
      <Header />
      <Navbar
        onAboutClick={handleAboutClick}
        onGalleryClick={handleGalleryClick}
        onContactClick={handleContactClick}
      />
      {page}
      <Footer />
    </div>
  );
}

export default App;
