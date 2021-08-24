import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import { App } from './App';
import { Provider } from 'react-redux';

import { FirebaseProvider } from 'modules/firebase/components';
import { configureStore } from 'modules/redux-store/factories';

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
