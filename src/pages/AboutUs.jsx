import React from 'react';

const AboutUs = () => {
  return (
    <main>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Brewskies</strong>, your go-to app for finding breweries near you! Whether you're a craft beer enthusiast or just looking for a fun place to hang out, we've got you covered.
        </p>
        <p>
          Our mission is to connect beer lovers with the best local breweries. With our easy-to-use map and search functionality, you can discover new breweries, explore their offerings, and plan your next visit.
        </p>
        <h2>Our Story</h2>
        <p>
          Brewskies was founded in 2024 by a group of beer enthusiasts who wanted to make it easier for people to find and support local breweries. We believe that every brewery has a unique story, and we're here to help you discover them.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Comprehensive database of breweries across the country.</li>
          <li>Easy-to-use search and map features.</li>
          <li>Regular updates with new breweries and events.</li>
          <li>Passionate team dedicated to the craft beer community.</li>
        </ul>
      </div>
    </main>
  );
};

export default AboutUs;