import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Form, Input, Button } from 'antd';
import Axios from 'axios';
// import Rating from './Rating'
const domain = 'http://localhost:'
const endPoint = '/movie/review'
const PORT = process.env.PORT || 3000;
const URL = domain + PORT + endPoint
const { TextArea } = Input;

const Review = ({ location }) => {
    const { title = "", src = "" } = location.state || {};
    const [request, setRequest] = useState({ title: title, img: src })
    const [result, setResult] = useState('')

    const handleReviewPost = async (e) => {
        console.log('fdfd', request)
        e.preventDefault()
        console.log('Form submitted', URL)
        const headers = { 'Content-Type': 'application/json' }
        const res = await Axios.post(URL, request, { headers })
        const data = res.data
        setResult(data)
    }

    const handleInputChange = e => {
        e.persist()
        setRequest(inputs =>
            ({ ...inputs, [e.target.name]: e.target.value }))
        console.log('values', request)
    }

    return (
        <div className="review" style={{
            background: "ghostwhite",
            width: "90%", padding: "20px", marginTop: "20px", borderRadius: "20px"
        }}>
            {src && <img style={{ borderRadius: "0.1rem", height: "5rem", width: "100%", objectFit: "cover", opacity: 0.8 }} src={src} alt="movie" />}
            <Form onSubmit={handleReviewPost}>
                {/* <Rating /> */}
                <Form.Item label="Title">
                    <Input name="title" onChange={handleInputChange} value={title} />
                </Form.Item>
                <Form.Item label="Score">
                    <Input name="score" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item label="Review">
                    <TextArea name="content" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item name="date" label="Date">
                    <DatePicker />
                </Form.Item>
                <Button htmlType="submit" type="primary" block>SUBMIT</Button>
            </Form>
        </div>
    )
}

export default Review;
