import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { Card, Icon, Avatar, Form, Button } from 'antd';
const Meta = Card.Meta;

const Movie = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false)

  const handleMovieQueryChange = e => {
    e.preventDefault()
    setMovieQuery(e.target.value);
  };

  const findMovie = async () => {
    setLoading(true)
    try {
      setMovies('')
      const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_MOVIE_KEY}&s=${movieQuery}&type=movie`;
      const { data } = await Axios.get(url)

      console.log('data', data);
      const { Response, Search, Error } = data;

      if (Response && Response === 'False') {
        // we lknow of an error
        alert('fuck off');
      }

      setMovies(data.Search)
      setSearchError(false)
    } catch (e) {
      console.log(e.message)
      setSearchError(true)
    }
    setLoading(false)
    setMovieQuery('')
  };

  return (
    <div>
      <div>
        <Form onSubmit={(e) => {
          e.preventDefault()
          if (e.key === 13) {
            alert('muthafer');
          }
          console.log('form', e)
        }}>
          <input style={{ "width": "100vw", "borderRadius": "5px" }} placeholder="eg. Nightmare before Christmas..."
            value={movieQuery}
            onChange={handleMovieQueryChange}
            placeholder='ex. Harry Potter'
            onKeyPress={e => { if (e.key === 'Enter') { console.log('pressed enter') } }}
          />
          <Button
            block
            disabled={movieQuery.length === 0}
            type="submit"
            onClick={findMovie}
            theme="primary">
            Search
          </Button>
        </Form>
      </div>
      {loading && <Loader />}
      {searchError && <p> Sorry, there was a problem </p>}
      <div className="card__container">
        <Link to="/movie/review">
        {movies && movies.length > 0 &&
          movies.map(({ Poster, Title, Year, imdbID }) => (
            <div className="card__item" key={imdbID} >
              <Card
                style={{ width: "100vw" }}
                cover={
                  <img
                    alt="review"
                    src={Poster}
                  />
                }
              >
                <Meta
                  title={Title}
                  description={Year}
                />
              </Card>
            </div>
          ))
        }</Link>
      </div>

      {movies.length < 1 ? <div>
        <img id="travolta" style={{ position: "fixed", bottom: 0, left: 0 }} src={require('./7VE.gif')} alt="loading..." />
      </div> : null}

    </div>
  );
};


export default Movie;
