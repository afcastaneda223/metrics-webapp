/* eslint-disable no-unused-vars */
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import bootstrap from 'bootstrap';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Cocktail from './components/Cocktail';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Details">
              <Details />
            </Route>
            <Route path="/Cocktail">
              <Cocktail />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
