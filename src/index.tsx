import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, NotifcationProvider, AuthenticationProvider } from './utils/providers';

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
