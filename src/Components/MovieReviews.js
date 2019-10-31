import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Avatar } from 'antd';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movies';
import axios from 'axios';

const Meta = Card.Meta
const URL = 'http://localhost:3000/movie/review';
// const URL = process.env === 'DEV' ? 'http://localhost:5000/movie/review' : 'https://goodwatch.herokuapp.com/'

const MovieReviews = ({ movies, getMovies }) => {
  const [image, setImage] = useState([])

  const getReview = async () => {
    const { data } = await axios.get(URL)
    getMovies(data)
    getAvatar()
  }

  const getAvatar = async () => {
    const { data } = await axios.get('https://tinyfac.es/api/users')
    let arr = data.map(z => z.avatars[0].url)
    setImage(arr)
  }

  useEffect(() => {
    getReview()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="card-list">
      {movies.map(({ _id, title, score, content, img }) =>
        <div key={_id} className="flip-card">
            <Card
              className="card_item flip-card-front"
              key={_id}
              id="joker"
              hoverable={true}
              cover={
                <Link to={`/review/${_id}`} >
                      <div className="flip-card-inner">
                  <img
                    alt="review"
                    src={img}
                  /></div>
                </Link>
              } actions={[
                <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="heart" key="heart" /></button>,
                <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="message" key="message" /></button>,
                <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="ellipsis" key="ellipsis" /></button>,
              ]}
            >
              <div className="flip-card-back">

              <Meta
                avatar={<Avatar style={{ objectFit: "cover" }} src={image[Math.floor(Math.random() * image.length)]} />}
                title={title}
              /></div>
            </Card></div>)}
    </div>
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
