import { SnackbarProvider } from 'notistack';
import React, { useRef } from 'react';
import { SnackbarUtilsConfigurator } from '../helpers/snackbar/snackbar';
import Button from '../../components/styled/button.styled';

interface IProps {
  children?: React.ReactNode;
}

const NotifcationProvider = ({ children }: IProps) => {
  const snackbarRef = useRef<SnackbarProvider>(null);
  return (
    <SnackbarProvider
      ref={snackbarRef}
      maxSnack={3}
      action={(snackbarId) => (
        <Button onClick={() => snackbarRef.current?.closeSnackbar(snackbarId)}>{'Dismiss'}</Button>
      )}
    >
      <SnackbarUtilsConfigurator />
      {children}
    </SnackbarProvider>
  );
};

export default NotifcationProvider;
