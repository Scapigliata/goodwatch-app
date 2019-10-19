import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './Components/Movie'
import Home from './Components/Home'
import Header from './Components/Header'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <div className="app-container-box">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movie" component={Movie} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
