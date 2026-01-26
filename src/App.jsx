import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="app-container">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-welcome">
          Welcome to Paradise Nursery, your one-stop destination for beautiful houseplants. 
          We offer a wide variety of indoor plants, succulents, and flowering plants to 
          bring nature's beauty into your home. Explore our collection and find the perfect 
          plants to enhance your living space.
        </p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={
          <>
            <Navbar />
            <ProductList />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Navbar />
            <CartItem />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <AboutUs />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
