import React from 'react';
import { A } from 'hookrouter';
import logo from '../assets/img/Logo.png';

const NavBar = () => {
  return (
    <div className="nav-bar" >
      <A href='/fantasy'> Fantasy Kickball </A>
      <A href='/'> <img src={logo} alt="WKL logo" style={{height: '2em'}} /> </A>
      <A href='/scorekeeper'> Scorekeeper </A>
    </div>
  );
};

export default NavBar;