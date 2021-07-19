import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Service from './pages/Service/Service';
import SignUp from './pages/Signup/SignUp';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Service} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Service} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/mypage/order" component={Mypage} />
        <Route exact path="/mypage/order/:id" component={Mypage} />
      </Switch>
    </Router>
  );
};

export default Routes;
