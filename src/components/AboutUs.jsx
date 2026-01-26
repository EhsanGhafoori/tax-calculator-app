import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded with a simple mission: to bring the beauty and benefits 
            of plants into every home. Since our establishment, we have been dedicated to providing 
            high-quality houseplants that not only enhance your living space but also improve your 
            well-being.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We believe that everyone deserves to experience the joy of nurturing plants. Our mission 
            is to make plant care accessible and enjoyable for both beginners and experienced plant 
            enthusiasts. We carefully select each plant in our collection to ensure they are healthy, 
            well-cared for, and ready to thrive in your home.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Wide variety of indoor plants, succulents, and flowering plants</li>
            <li>Expert care guides and tips for each plant</li>
            <li>Quality assurance - all plants are inspected before shipping</li>
            <li>Customer support to help you succeed in your plant journey</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <p>
            At Paradise Nursery, we combine passion with expertise. Our team of plant specialists 
            is always available to answer your questions and provide guidance. We are committed to 
            sustainability and eco-friendly practices in everything we do.
          </p>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions? We'd love to hear from you! Reach out to us through our customer service 
            team, and we'll be happy to assist you with any inquiries about our plants or services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
