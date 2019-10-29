import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './Components/Movie'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Review from './Components/Review'
import MovieReview from './Components/MovieReview'
import MovieReviews from './Components/MovieReviews'
import Login from './Components/Login'
import Error from './Components/ErrorPage'
import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div className="app-container">
        <div className="app-container-box">
          <Switch>
            <Route exact path="/" component={MovieReviews} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/movie/review" component={Review} />
            <Route exact path="/movie/reviews" component={MovieReviews} />
            <Route exact path="/review/:id" component={MovieReview} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/*" component={Error} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  </div>
)

export default App;
