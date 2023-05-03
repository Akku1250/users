import { OptionsObject, WithSnackbarProps, useSnackbar } from 'notistack';
import INotification from './interfaces/INotification';
import React from 'react';

let useSnackbarRef: WithSnackbarProps;

export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

const snackbar: INotification = {
  notifySuccess(msg: string, duration?: number) {
    const options: OptionsObject = {
      variant: 'success',
      autoHideDuration: duration,
      persist: duration === null,
    };

    this.toast(msg, options);
  },
  notifyWarning(msg: string, duration?: number) {
    const options: OptionsObject = {
      variant: 'warning',
      autoHideDuration: duration,
      persist: duration === null,
    };

    this.toast(msg, options);
  },
  notifyInfo(msg: string, duration?: number) {
    const options: OptionsObject = {
      variant: 'info',
      autoHideDuration: duration,
      persist: duration === null,
    };

    this.toast(msg, options);
  },
  notifyError(msg: string, duration?: number) {
    const options: OptionsObject = {
      variant: 'error',
      autoHideDuration: duration,
      persist: duration === null,
    };

    this.toast(msg, options);
  },
  toast(msg: string, options: OptionsObject) {
    useSnackbarRef.enqueueSnackbar(msg, options);
  },
};

export default snackbar;
