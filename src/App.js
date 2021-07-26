import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './bse/Home';
import Trending from './bse/Trending';
import Gainers from './bse/Gainers';
import Losers from './bse/Losers';
import Navbar from './bse/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact> <Home /></Route>
        <Route path='/trending'><Trending /></Route>
        <Route path='/gainers'><Gainers /></Route>
        <Route path='/losers'><Losers /></Route>
      </Switch>
    </div>
  );
}

export default App;
