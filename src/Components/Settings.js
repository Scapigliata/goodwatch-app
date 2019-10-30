import React, { useState } from 'react';
import { Avatar, Divider, Col, Row } from 'antd';
import axios from 'axios';

const Settings = () => {

  const DescriptionItem = ({ title, content }) => (
    <div
      style={{
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
        color: 'rgba(0,0,0,0.65)',
      }}
    >
      <p
        style={{
          marginRight: 8,
          display: 'inline-block',
          color: 'rgba(0,0,0,0.85)',
        }}
      >
        {title}:
      </p>
      {content}
    </div>
  );

  const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
  };

  return (
    < div >
      <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
      <Avatar style={{float: "right"}} size={100} src='http://www.nationalaquatic.com/wp-content/uploads/2012/11/generic-profile-pic.png' />
      <p style={pStyle}>Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content="Paulina Ludwig" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Account" content="goodwatch@example.com" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="City" content="Stockholm" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Country" content="Sweden 🇸🇪" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Birthday" content="October 15,1992" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Website" content="supercute.com" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Message"
            content="Hello this is drawer."
          />
        </Col>
      </Row>
      <Divider />
      <p style={pStyle}>Company</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Department" content="Salt" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Supervisor" content={<a>ICHI Dev Department</a>} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Skills"
            content="JavaScript / Pythin, Pancake-making, React, React-Native, Node.js, Express etc."
          />
        </Col>
      </Row>
      <Divider />
      <p style={pStyle}>Contacts</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Email" content="paulina.ludwig@appliedtechnology.se" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Phone Number" content="0793477271" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Github"
            content={
              <a href="http://github.com/scapigliata">
                github.com/scapigliata
                  </a>
            }
          />
        </Col>
      </Row>
    </div >
  )
}

export default Settings;
