import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
