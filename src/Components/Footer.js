import React from 'react';
import { Affix } from 'antd';
import { Card, Icon, Avatar, Form, Button } from 'antd';
const Meta = Card.Meta;

const Footer = () => {
  return (
    <div style={{ "width": "100vw" }}>
      <Affix 
      offsetBottom>
        <Card
          bodyStyle={{ "padding": 0, "width": "100vw" }}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        />
      </Affix>
    </div>
      )
    
    }
    
    export default Footer;
