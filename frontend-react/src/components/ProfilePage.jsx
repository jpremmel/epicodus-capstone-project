import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {

  let centerTextStyle = {
    textAlign: 'center'
  };
  let btnStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  return(
    <div>
      <h2 style={centerTextStyle}>My Profile</h2>
      <p><strong>First name:</strong> Sylvie</p>
      <p><strong>Last name:</strong> Remmel</p>
      <p><strong>Email address:</strong> sylvie@remmel.com</p>
      <p><strong>LinkedIn URL:</strong> www.linkedin/in/sylvie-remmel</p>
      <p><strong>Bio:</strong> This is where the brief bio will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <Link to='/edit'><button style={btnStyle} className='waves-effect waves-light btn-large'>Edit Profile</button></Link>
    </div>
  );
}

export default ProfilePage;