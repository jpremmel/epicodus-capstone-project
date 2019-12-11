import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import CreateAcctPage from './CreateAcctPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import EditProfilePage from './EditProfilePage';
import BrowsePage from './BrowsePage';

function App() {
  return(
    <div>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={() => <HomePage /> } />
          <Route path='/create-account' render={() => <CreateAcctPage /> } />
          <Route path='/login' render={() => <LoginPage /> } />
          <Route path='/profile' render={() => <ProfilePage /> } />
          <Route path='/browse' render={() => <BrowsePage /> } />
          <Route path='/edit' render={() => <EditProfilePage /> } />
        </Switch>
      </div>
    </div>
  );
}

export default App;