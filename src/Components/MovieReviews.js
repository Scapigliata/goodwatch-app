import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Avatar } from 'antd';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movies';
import SearchBar from './SearchBar';
import axios from 'axios';
import { filterMovieByValue } from '../utils/selectors';

const Meta = Card.Meta
const URL = 'http://localhost:3000/movie/review';
// const URL = process.env === 'DEV' ? 'http://localhost:5000/movie/review' : 'https://goodwatch.herokuapp.com/'

const MovieReviews = ({ movies, getMovies }) => {
  const [filterMovie, setFilterMovie] = useState('');
  const [image, setImage] = useState([])

  const getReview = async () => {
    const { data } = await axios.get(URL)
    getMovies(data)
    getAvatar()
  }

  const handleSetFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const getAvatar = async () => {
    const { data } = await axios.get('https://tinyfac.es/api/users')
    let arr = data.map(z => z.avatars[0].url)
    setImage(arr)
  }

  useEffect(() => {
    console.log('useEffect');
    getReview()
    // eslint-disable-next-line
  }, [])

  const filteredMovies = filterMovieByValue(filterMovie, movies);
  console.log('filteredMovies', filteredMovies);
  console.log('movies', movies);

  return (
    <Fragment>
      <SearchBar value={filterMovie} onChange={handleSetFilterMovie} />
      <div className="card-list">
        {filteredMovies.map(({ _id, title, score, content, img }) =>
          <div key={_id} className="flip-card">
            <div key={_id} className="flip-card-inner">
              <Card
                className="card_item flip-card-front"
                key={_id}
                id="joker"
                hoverable={true}
                cover={
                  <Link to={`/review/${_id}`} >
                    <img
                      className=""
                      alt="review"
                      src={img}
                    />
                  </Link>
                } actions={[
                  <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="heart" key="heart" /></button>,
                  <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="message" key="message" /></button>,
                  <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="ellipsis" key="ellipsis" /></button>,
                ]}
              >
                <Meta
                  avatar={<Avatar style={{ objectFit: "cover" }} src={image[Math.floor(Math.random() * image.length)]} />}

                />
                <div className="card__title-x ant-card-meta-title" dangerouslySetInnerHTML={{__html: title}}></div>
              </Card>
              <Link to={`/review/${_id}`} >
                <div style={{ paddingTop: "1rem" }} className="flip-card-back"><h2>{title}</h2><hr />
                  <p className="card__title-x" dangerouslySetInnerHTML={{__html: content}}></p>
                </div>
              </Link>
            </div>
          </div>)}
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

const mapDispatchToProps = dispatch => ({
  getMovies: (movies) => dispatch(getMovies(movies))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieReviews);
