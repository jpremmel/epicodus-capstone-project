import React from 'react';

function CreateAcctPage() {

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
      <h2 style={centerTextStyle}>Create An Account</h2>
      <form>
        <div className='input-field'>
          <input
            type='text'
            placeholder='First name' />
        </div>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Last name' />
        </div>
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
        <div className='input-field'>
          <input
            type='text'
            placeholder='LinkedIn profile URL' />
        </div>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Say a bit about yourself' />
        </div>
        <button style={btnStyle} type='submit' className='waves-effect waves-light btn-large'>Create Account</button>
      </form>
    </div>
  );
}

export default CreateAcctPage;