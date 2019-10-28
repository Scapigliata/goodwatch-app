import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";


const Header = () => (
  <header className="App-header">
    <Link to="/login" ><Avatar icon="user" /></Link>
    <h1 style={{"color": "white"}}>Goodwatch</h1>
    <Link to="/movie" style={{"paddingBottom":"5px"}} ><FontAwesomeIcon icon={faVideo} /></Link>
  </header>
)

export default Header;
