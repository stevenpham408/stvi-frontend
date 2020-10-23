import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import LandingPage from './Pages/LandingPage'
import RegistrationPage from './Pages/RegistrationPage'
import LoginPage from './Pages/LoginPage'
import UserMainPage from './Pages/UserMainPage'
import ProtectedRoutes from './Pages/Components/ProtectedRoutes'
import getRedirection from './getRedirect';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path={'/'} exact> <LandingPage/> </Route>
            <Route path={'/register'} exact> <RegistrationPage/> </Route>
            <Route path={'/login'} exact> <LoginPage/> </Route>
            <ProtectedRoutes path='/userpage' component={UserMainPage}/>
            <Route path={'/:url'} component={(getRedirection)} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;