import React, { useState, useEffect, useContext, useReducer, Fragment } from 'react';
import { Card, Icon, Avatar } from 'antd';
import axios from 'axios';

const Meta = Card.Meta

// ! Usereducer hook : returns state and dispatch function
const exampleReducer = (state, action) => {
  switch(action.type) {
    case 'POPULATE_DATA':
      return action.payload
    default:
      return state
  }
}

const MovieReview = ({ match }) => {
  const [state, dispatch] = useReducer(exampleReducer, [])
  const [review, setReview] = useState(null);

  const getReview = async () => {
    const { params: { id } } = match
    const { data } = await axios.get(`http://localhost:3000/movie/review/${id}`)
    setReview(data);
  }

  useEffect(() => {
    getReview()
  })

  if (!review) {
    return <Fragment />
  }

  return (
    <div className="card__item">
      <Card
        className="x"
        id="joker"
        hoverable={true}
        style={{ width: "100vw" }}
        cover={
          <img
            alt="review"
            src={review.img}
          />
        } actions={[
          <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="heart" key="heart" /></button>,
          <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="message" key="message" /></button>,
          <button style={{ "border": "none", background: "none" }} onClick={() => console.log('btn')}><Icon type="ellipsis" key="ellipsis" /></button>,
        ]}
      >
        <Meta
          avatar={<Avatar src="data:image/jpeg;base64,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" />}
          title={review.title}
          description={review.content}
        />
      </Card>
    </div>
  )
}

export default MovieReview;
