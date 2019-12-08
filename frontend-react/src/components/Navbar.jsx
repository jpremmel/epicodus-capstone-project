import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function Navbar() {
  return(
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>Home</Link>
        <ul>
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