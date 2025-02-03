import { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  const [count, setCount] = useState(0);

  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* this is the default component  */}
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />}/>
      <Route path="reviews" element={<Reviews />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  );
};

export default App;
