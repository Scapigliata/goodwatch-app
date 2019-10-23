import React, { useState, useEffect } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon } from "shards-react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Loader from './Loader';
import { Card, Icon, Avatar, Form, Button } from 'antd';
import { Affix } from 'antd';
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
      {/* <InputGroup seamless> */}
      {/* <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faVideo} />
          </InputGroupText>
        </InputGroupAddon> */}
      <div>
        <input style={{ "width": "100vw", "borderRadius": "5px" }} placeholder="eg. Nightmare before Christmas..."
          value={movieQuery}
          onChange={handleMovieQueryChange}
          placeholder='ex. Harry Potter'
          onKeyPress={e => { if (e.key === 'Enter') { console.log('Pressed Enter') } }}
        />
        {/* <InputGroupAddon type="append"> */}
        <Button
          block
          disabled={movieQuery.length === 0}
          type="submit"
          onClick={findMovie}
          theme="primary">
          Search
          </Button>
      </div>

      {/* </InputGroupAddon> */}
      {/* </InputGroup> */}
      {loading && <Loader />}
      {searchError && <p> Sorry, there was a problem </p>}
      {movies &&
        movies.map(({ Poster, Title, Year, imdbID }) => (

          <div className="card__item">
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

          // <div className="movie-list-item" key={imdbID} >
          //   <button><img src={Poster} alt="movie" /></button>
          //   <p>{Title}</p><p>({Year})</p>
          //   <a rel="noopener noreferrer" target="_blank" href={`https://www.imdb.com/title/${imdbID}`}>
          //     Show More
          //   </a>
          // </div>
        ))
      }
      <div >
      <img style={{ position: "fixed", bottom:0, left: 0, width: "100%" }} src={require('./7VE.gif')} alt="loading..." />
      </div>

    </div>
  );
};


export default Movie;
