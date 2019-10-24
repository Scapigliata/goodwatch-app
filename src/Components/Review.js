import React from 'react';
import { DatePicker } from 'antd';
import { Form, Input, Button } from 'antd';
import { blue } from '@ant-design/colors';
const { TextArea } = Input;

const Home = () => (
    <div style={{ background:"ghostwhite", width:"90%", padding:"20px", marginTop:"20px", borderRadius:"20px"}}>
        <Form>
            <Form.Item label="Title">
                <Input />
            </Form.Item>
            <Form.Item label="Review">
                <TextArea />
            </Form.Item>
            <Form.Item label="Date">
                <DatePicker />
            </Form.Item>
            <Button block>SUBMIT</Button>
        </Form>
    </div>
)

export default Home;