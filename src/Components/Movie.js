import React, { useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { Card, Form, Button } from 'antd';
import Travolta from '../assets/travolta.gif';
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
      // eslint-disable-next-line
      const { Response, Search, Error } = data;

      if (Response && Response === 'False') {
        // we lknow of an error
        console.error('There was a problem')
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
    <div className="search-movies">
      <div >
        <Form onSubmit={e => {
          e.preventDefault()
          findMovie()
        }}>
          <input style={{ "width": "100%", "borderRadius": "5px" }} placeholder="eg. Nightmare before Christmas..."
            value={movieQuery}
            onChange={handleMovieQueryChange}
            // eslint-disable-next-line
            placeholder='ex. Harry Potter'
            onKeyPress={e => { if (e.key === 'Enter') { console.log('pressed enter') } }}
          />
          <Button
            block
            disabled={movieQuery.length === 0}
            type="submit"
            onClick={findMovie}
            style={{ background: 'linear-gradient(90deg, #667eea 0%,#764ba2 100% )', border: '1px solid #652f9b', fontWeight: "bolder", color: "white" }}
            >
            Search
          </Button>
        </Form>
      </div>
      {loading && <Loader />}
      {searchError && <h3 style={{ color: 'red' }}> Sorry, there was a problem </h3>}
      <div className="card__container">
        {movies && movies.length > 0 &&
          movies.map(({ Poster, Title, Year, imdbID }) => (
            <Link
              key={imdbID}
              to={{
                pathname: "/movie/review",
                state: {
                  title: Title,
                  src: Poster,
                }
              }
              }>

              <div className="card__item movie_item" key={imdbID} >
                <Card
                  style={{ width: "100vw" }}
                  cover={
                    <img
                      alt="review"
                      src={Poster}
                    />
                  }
                >
                  {movies ?
                    <Meta
                      title={Title}
                      description={Year}
                    /> : null}
                </Card>
              </div>
            </Link>
          ))
        }
      </div>

      {movies && movies.length < 1 ? <div>
        <img className="travolta" style={{ width: "70%", position: "fixed", bottom: 0, left: 0 }} src={Travolta} alt="loading..." />
      </div> : null}

    </div>
  );
};


export default Movie;
