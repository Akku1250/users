import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../features/login/Login';
import { GrantAccess } from '../components';
import AppLayout from '../components/AppLayout';
import UsersList from '../features/userlist/UsersList';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AppLayout />}
      >
        <Route
          path="login"
          element={<Login />}
        />
        <Route element={<GrantAccess />}>
          <Route
            path="/"
            element={<UsersList />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
