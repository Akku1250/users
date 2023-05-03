import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

interface IProps {
  children?: React.ReactNode;
}

const StoreProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
