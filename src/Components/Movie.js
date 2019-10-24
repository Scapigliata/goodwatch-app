import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
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
      const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_MOVIE_KEY}&s=${movieQuery}&type=movie`;
      const res = await Axios.get(url)
      const data = await res.data.Search
      console.log(data)
      setMovies(res.data.Search)
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
          console.log('form')
        }}>
          <input style={{ "width": "100vw", "borderRadius": "5px" }} placeholder="eg. Nightmare before Christmas..."
            value={movieQuery}
            onChange={handleMovieQueryChange}
            placeholder='ex. Harry Potter'
            onKeyPress={e => { if (e.key === 'Enter') { console.log('Pressed Enter') } }}
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
        {movies &&
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
                actions={[
                  <Icon type="heart" key="heart" />,
                  <Icon type="plus" key="plus" />,
                  <Icon type="ellipsis" key="ellipsis" />,
                ]}
              >
                <Meta
                  title={Title}
                  description={Year}
                />
              </Card>
            </div>
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
