import React from 'react';
import ReactDOM from 'react-dom';

import './styles/App.css';
import './styles/auth-styles/Register.css';
import './styles/auth-styles/Login.css';
import './styles/auth-styles/ResetPass.css';
import './styles/builder-styles/Header.css';
import './styles/builder-styles/ToppingStyle.css';
import './styles/builder-styles/SizeStyle.css';
import './styles/builder-styles/DiscountStyle.css';
import './styles/builder-styles/FinisherStyle.css';
import './styles/order/OrderInfo.css';
import './styles/order/ShippingInfo.css';
import './styles/order/OrderSuccesStyle.css';

import { App } from './App';
import { Provider } from 'react-redux';

import { FirebaseProvider } from './modules';
import { configureStore } from './modules';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
