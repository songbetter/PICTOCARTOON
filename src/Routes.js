import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  LOGIN_URL,
  LOGOUT_URL,
  MYPAGE_URL,
  SERVICE_URL,
  SIGNUP_URL,
} from './lib/api/api.config';
import Service from './pages/Service/Service';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Mypage from './pages/Mypage/Mypage';
import MypageDetail from './pages/MypageDetail/MypageDetail';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={SERVICE_URL} component={Service} />
        <Route exact path={LOGIN_URL} component={Login} />
        <Route exact path={LOGOUT_URL} component={Service} />
        <Route exact path={SIGNUP_URL} component={SignUp} />
        <Route exact path={MYPAGE_URL} component={Mypage} />
        <Route exact path={`${MYPAGE_URL}/:id`} component={MypageDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
