import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const Header = () => (
  <header className="App-header">
    <Link to="/login" ><Avatar icon="user" /></Link>
    <h1 style={{"color": "white"}}>Goodwatch</h1>
  </header>
)

export default Header;
