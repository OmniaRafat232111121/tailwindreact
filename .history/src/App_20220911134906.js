import React from 'react';
import Analytics from './components/Analytics';
// import Analytics from './components/Analytics';
 import Cards from './components/Cards';
// import Footer from './components/Footer';
 import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
// import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      
      <Cards/>
      <Analytics/>
      <Newsletter/>

    </div>
  );
}

export default App;