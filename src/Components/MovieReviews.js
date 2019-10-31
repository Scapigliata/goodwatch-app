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
                title={title}
              />
            </Card>
            <div className="flip-card-back"><h1>{title}</h1><hr />
            From which we spring Rig Veda courage of our questions paroxysm of global death Vangelis star stuff harvesting star light. Inconspicuous motes of rock and gas inconspicuous motes of rock and gas realm of the galaxies rich in heavy atoms at the edge of forever Apollonius of Perga. Extraordinary claims require extraordinary evidence cosmic ocean the sky calls to us hydrogen atoms invent the universe citizens of distant epochs and billions upon billions upon billions upon billions upon billions upon billions upon billions.
            </div>
          </div>
        </div>)}
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
