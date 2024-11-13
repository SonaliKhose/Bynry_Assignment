import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProfileSummary from './pages/ProfileSummary';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-1"> {/* Main content section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<ProfileSummary />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
}

export default App;
