import React from 'react'
import CoinAppComponents from './Coin/CoinAppComponents'
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hero from './Hero';
import { HeroData, HeroDataThree, HeroDataTwo, HeroDataFour } from './Data/HeroData';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Hero {...HeroData} />
          <Hero {...HeroDataTwo} />
          <Hero {...HeroDataThree} />
          <Hero {...HeroDataFour} />
        </Route>
        <Route path="/discover" component={CoinAppComponents}>
        </Route>
      </Switch>
      <CoinAppComponents/>
    </Router>
  );
}

export default App;
