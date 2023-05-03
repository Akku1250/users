import React, { createContext, useContext, useState } from 'react';
import IUserLogin from '../../interfaces/IUserLogin';

interface IProps {
  children?: React.ReactNode;
}

const UserContext = createContext<IUserLogin | null>(null);
const UserUpdateContext = createContext<any>(null);

export const useUser = () => {
  return useContext(UserContext);
};

export const useUserUpdate = () => {
  return useContext(UserUpdateContext);
};

const AuthenticationProvider = ({ children }: IProps) => {
  const [token, setToken] = useState<IUserLogin | null>(null);

  return (
    <UserContext.Provider value={token}>
      <UserUpdateContext.Provider value={setToken}>{children}</UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};

export default AuthenticationProvider;
