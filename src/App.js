import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import BeerDetail from "./pages/BeerDetail";
import AddBeer from "./pages/AddBeer";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-beer">Add Beer</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/*<Route path="/about">*/}
            {/*  <About />*/}
            {/*</Route>*/}
            <Route path="/beer-detail/:id">
              <BeerDetail />
            </Route>
            <Route path="/add-beer">
              <AddBeer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
