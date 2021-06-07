import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {
  RegisterView,
  LoginView,
  ResetPasswordView,
  PizzaMaker,
} from '../../views';

import { useSelector } from 'react-redux';
import { AppState } from '../redux-store';

export const Routing: React.FC = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);

  console.log(user);

  return (
    <Switch>
      <Route exact path={!user ? '/' : '/register'}>
        <RegisterView />
      </Route>
      <Route path='/login'>
        <LoginView />
      </Route>
      <Route path='/reset-pass'>
        <ResetPasswordView />
      </Route>
      <Route path={user ? '/' : '/builder'}>
        <PizzaMaker />
      </Route>
      <Route exact path='/order'></Route>
      <Route exact path='/order-success'></Route>
    </Switch>
  );
};
