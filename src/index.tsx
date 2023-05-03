import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotifcationProvider from './utils/providers/NotifcationProvider';
import StoreProvider from './utils/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import AuthenticationProvider from './utils/providers/Authentication/AuthenticationProvider';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <NotifcationProvider>
        <AuthenticationProvider>
          <App />
        </AuthenticationProvider>
      </NotifcationProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
