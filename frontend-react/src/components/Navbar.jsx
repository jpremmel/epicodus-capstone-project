import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function Navbar() {

  let navStyle = {
    backgroundColor: 'grey'
  };
  let marginLeftStyle = {
    marginLeft: '20px'
  };
  let marginRightStyle = {
    marginRight: '20px'
  };

  return(
    <nav style={navStyle}>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo' style={marginLeftStyle}>Home</Link>
        <ul id='nav-mobile' className='right hide-on-small-and-down' style={marginRightStyle}>
          <li><Link to='/create-account'>Create Account</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/browse'>Browse</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;