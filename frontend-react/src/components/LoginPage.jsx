import React from 'react';

function LoginPage() {

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
      <h2 style={centerTextStyle}>Log in</h2>
      <form>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Email address' />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Password' />
        </div>
        <button style={btnStyle} type='submit' className='waves-effect waves-light btn-large'>Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;