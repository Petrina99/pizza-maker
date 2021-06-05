import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { RegisterView, LoginView, ResetPasswordView } from '../../views';
export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <RegisterView />
      </Route>
      <Route path='/login'>
        <LoginView />
      </Route>
      <Route path='/reset-pass'>
        <ResetPasswordView />
      </Route>
      <Route path='/builder'></Route>
      <Route exact path='/order'></Route>
      <Route exact path='/order-success'></Route>
    </Switch>
  );
};
