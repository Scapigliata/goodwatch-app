import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Drawer, Button } from 'antd';
import Settings from './Settings';
import mp3 from './tick.mp3'
const audio = new Audio(mp3)

const Footer = () => {
  const [visibility, setVisibility] = useState(false);

  const handleDrawer = () => {
    setVisibility(false)
  }

  return (
    <div style={{ background: "white", display: "flex", "alignItems": "center", "justifyContent": "space-evenly", position: "sticky", bottom: "0", height: "35px" }}>
      <Link to="/"><Icon type="home" key="home" /> </Link>
      <Link to="/movie/review"><Icon type="plus" key="plus" /></Link>
      <Button style={{ border: 'none' }} onClick={() => {
        audio.play()
        setVisibility(true)
      }} 
        to="/movie/reviews">
          <Icon type="setting" key="setting" /></Button>
      <Drawer
        width={500}
        placement="right"
        closable={true}
        onClose={handleDrawer}
        visible={visibility}
      >
        <Settings />
      </Drawer>
    </div>
  )
}

export default Footer;
