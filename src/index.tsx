import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import NotifcationProvider from './utils/providers/NotifcationProvider';
import StoreProvider from './utils/providers/StoreProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationProvider from './utils/providers/Authentication/AuthenticationProvider';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <NotifcationProvider>
        <AuthenticationProvider>
          <Routes>
            <Route
              path="/*"
              element={<App />}
            />
          </Routes>
        </AuthenticationProvider>
      </NotifcationProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
