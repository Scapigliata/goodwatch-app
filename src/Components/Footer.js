import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const Footer = () => {
  return (
    <div style={{ background:"white", display:"flex", "alignItems":"center", "justifyContent":"space-evenly", position: "sticky", bottom: "0", height:"35px" }}>
      <Link to= "/"><Icon type="home" key="home" /> </Link>
      <Link to="/movie/review"><Icon type="plus" key="plus" /></Link>
      <Link to="/settings"><Icon type="setting" key="setting" /></Link>
    </div>
  )
}

export default Footer;
