import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import LandingPage from './Pages/LandingPage'
import RegistrationPage from './Pages/RegistrationPage'
import LoginPage from './Pages/LoginPage'
import UserMainPage from './Pages/UserMainPage'

function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
          <Route path={'/'} exact> <LandingPage/> </Route>
          <Route path={'/register'}> <RegistrationPage/> </Route>
          <Route path={'/login'}> <LoginPage/> </Route>
          <Route path={'/userpage'}> <UserMainPage/> </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;