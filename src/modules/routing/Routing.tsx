import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import {
  RegisterView,
  LoginView,
  ResetPasswordView,
  PizzaMaker,
  Order,
  Success,
} from '../../views';

import { useSelector } from 'react-redux';
import { AppState } from '../redux-store';

import { useHistory } from 'react-router-dom';

export const Routing: React.FC = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);

  const history = useHistory();

  console.log(user.email);
  console.log(user.message);

  useEffect(() => {
    if (user.message === 'User exists.') {
      history.push('/builder');
    }

    if (user.message !== 'User exists.') {
      history.push('/register');
    }
  });

  return (
    <Switch>
      <Route path='/register'>
        <RegisterView />
      </Route>
      <Route path='/builder'>
        <PizzaMaker />
      </Route>
      <Route path='/login'>
        <LoginView />
      </Route>
      <Route path='/reset-pass'>
        <ResetPasswordView />
      </Route>
      <Route path='/order'>
        <Order />
      </Route>
      <Route path='/success'>
        <Success />
      </Route>
    </Switch>
  );
};
