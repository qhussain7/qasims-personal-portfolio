import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PacmanAI from './components/projects/PacmanAI'; // Import PacmanAI page
import BuildWorld from './components/projects/BuildWorld'; // Import BuildWorld page
import Contact from './components/Contact';
import './styles.css'; // Global styles

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pacman-ai" element={<PacmanAI />} /> {/* Pacman AI route */}
          <Route path="/projects/build-world" element={<BuildWorld />} /> {/* Build World route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;