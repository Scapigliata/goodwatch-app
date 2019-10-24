import React from 'react';
import { DatePicker, Card } from 'antd';
import { Form, Input, Button } from 'antd';
import { blue } from '@ant-design/colors';
const { TextArea } = Input;

const MovieReview = () => (
  <div onClick={() => window.location.href = "/movie/review"} className="card__item">
    <Card
      id="joker"
      hoverable={true}
      style={{ width: "100vw" }}
      cover={
        <img
          alt="review"
          src="https://pmcvariety.files.wordpress.com/2013/04/joker.jpg?w=720"
        />
      }
    >
    </Card>
  </div>
)

export default MovieReview;
