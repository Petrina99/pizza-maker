import React, { useState, useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { AppState } from '../redux-store';

import {
  RegisterView,
  LoginView,
  ResetPasswordView,
  PizzaMaker,
} from '../../views';
export const Routing: React.FC = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);
  console.log(user);
  const [registerPath, setRegisterPath] = useState('/');
  const [builderPath, setBuilderPath] = useState('/builder');

  const handleFirstPage = () => {
    if (user) {
      setRegisterPath('/register');
      setBuilderPath('/');
    }
    setRegisterPath('/');
    setBuilderPath('/builder');
  };

  useEffect(() => {
    handleFirstPage();
  }, []);

  return (
    <Switch>
      <Route exact path={registerPath}>
        <RegisterView />
      </Route>
      <Route path='/login'>
        <LoginView />
      </Route>
      <Route path='/reset-pass'>
        <ResetPasswordView />
      </Route>
      <Route path={builderPath}>
        <PizzaMaker />
      </Route>
      <Route exact path='/order'></Route>
      <Route exact path='/order-success'></Route>
    </Switch>
  );
};
