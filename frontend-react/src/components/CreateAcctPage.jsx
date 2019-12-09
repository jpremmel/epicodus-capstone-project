import React from 'react';

function CreateAcctPage() {
  return(
    <div>
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
        <button type='submit' className='waves-effect waves-light btn-large'>Create Account</button>
      </form>
    </div>
  );
}

export default CreateAcctPage;