import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './Components/Movie'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Review from './Components/Review'
import MovieReview from './Components/MovieReview'
import Login from './Components/Login'
import Error from './Components/ErrorrPage'
import 'antd/dist/antd.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
          <Router>
      <Header />
      <div className="app-container">
        <div className="app-container-box">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movie" component={Movie} />
              <Route exact path="/movie/review" component={Review} />
              <Route exact path="/review/:id" component={MovieReview} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/*" component={Error} />
            </Switch>
        </div>
      </div>
      <Footer />
          </Router>
    </div>
  );
}

export default App;
