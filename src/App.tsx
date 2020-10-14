import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import LandingPage from './Pages/LandingPage'
import RegistrationPage from './Pages/RegistrationPage'
import LoginPage from './Pages/LoginPage'
import UserMainPage from './Pages/UserMainPage'
import getRedirection from './getRedirect';

function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
          <Route path={'/'} exact> <LandingPage/> </Route>
          <Route path={'/register'} exact> <RegistrationPage/> </Route>
          <Route path={'/login'} exact> <LoginPage/> </Route>
          <Route path={'/userpage'} exact> <UserMainPage/> </Route>
          <Route path={'/:url'} component={(getRedirection)} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;