import React, { useState, useEffect } from 'react';
import { CardMedia } from '@material-ui/core';
import { Button, InputGroup, InputGroupText, InputGroupAddon, FormInput } from "shards-react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Loader from './Loader';

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
      {loading && <Loader />}
      {searchError && <p> Sorry, there was a problem </p>}
      <hr />
      <InputGroup seamless>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faVideo} />
          </InputGroupText>
        </InputGroupAddon>
        <FormInput
          value={movieQuery}
          onChange={handleMovieQueryChange}
          placeholder='ex. Harry Potter'
          onKeyPress={e => { if (e.key === 'Enter') { console.log('Pressed Enter') } }}
        />
        <InputGroupAddon type="append">
          <Button
            disabled={movieQuery.length === 0}
            type="submit"
            onClick={findMovie}
            theme="primary">
            Find
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {movies &&
        movies.map(({ Poster, Title, Year, imdbID }) => (
          <div className="movie-list-item" key={imdbID} >
            <button><img src={Poster} alt="movie" /></button>
            <p>{Title}</p><p>({Year})</p>
            <a rel="noopener noreferrer" target="_blank" href={`https://www.imdb.com/title/${imdbID}`}>
              Show More
            </a>
          </div>
        ))
      }
    </div>
  );
};


export default Movie;
