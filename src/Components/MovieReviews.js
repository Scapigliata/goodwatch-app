import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Avatar } from 'antd';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movies';
import axios from 'axios';

const Meta = Card.Meta
const URL = 'http://localhost:3000/movie/review';

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
  }, [])

  return (
    <div className="card-list">
      {movies.map(({ _id, title, score, content, img }) =>
        <Card
          key={_id}
          id="joker"
          hoverable={true}
          cover={
            <Link to={`/review/${_id}`} >
              <img
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
            avatar={<Avatar src={image[Math.floor(Math.random() * image.length)]} />}
            title={title}
          />
        </Card>)}
      <div className="flip-card-back"></div>
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
