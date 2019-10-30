import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Badge } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className="App-header-contain">
    <header className="App-header">
      <h1 className="head" style={{ "color": "white" }}>GoodFlix</h1>
      <div style={{display: "flex", alignItems: "center", width: '20%', justifyContent: "space-between"}} >
        <Link to="/login" ><Badge dot><Avatar style={{ backgroundColor: '#87d068' }} size="small" icon="user" /> </Badge></Link>
        <Link to="/movie" ><FontAwesomeIcon icon={faVideo} /></Link>
      </div>
    </header>
  </div>
)

export default Header;
