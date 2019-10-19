import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './Components/Movie'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Goodwatch</h1>
        <Router>
          <Switch>
            <Route exact path="/"/>
            <Route path="/movie" component={Movie}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
