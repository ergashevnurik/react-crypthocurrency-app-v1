import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Cards  from './components/Cards';
import CoinAppComponents from './components/Coin/CoinAppComponents';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { HeroData, HeroDataThree, HeroDataTwo, HeroDataFour } from './Data/HeroData';
function App() {
  return (
    <Router>
      <Navbar />
          <Hero {...HeroData} />
          <Hero {...HeroDataTwo} />
          <Cards />
          <Hero {...HeroDataThree} />
          <Hero {...HeroDataFour} />
          
      <CoinAppComponents/>
    </Router>
  );
}

export default App;
