import React, { useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { Card, Form, Button } from 'antd';
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
    <div>
      <div>
        <Form onSubmit={e => {
          e.preventDefault()
          findMovie()
        }}>
          <input style={{ "width": "100vw", "borderRadius": "5px" }} placeholder="eg. Nightmare before Christmas..."
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
            theme="primary">
            Search
          </Button>
        </Form>
      </div>
      {loading && <Loader />}
      {searchError && <p> Sorry, there was a problem </p>}
      <div className="card__container">
        {movies && movies.length > 0 &&
          movies.map(({ Poster, Title, Year, imdbID }) => (
            <Link 
            key={imdbID}
              to={{
              pathname:"/movie/review",
              state:{
                title: Title,
                src: Poster,
              }}
            }>

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

      {movies.length < 1 ? <div>
        <img id="travolta" style={{ position: "fixed", bottom: 0, left: 0 }} src={require('./7VE.gif')} alt="loading..." />
      </div> : null}

    </div>
  );
};


export default Movie;
