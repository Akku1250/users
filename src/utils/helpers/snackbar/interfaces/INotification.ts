import { OptionsObject } from "notistack";

interface INotification {
  notifySuccess: (msg: string, duration?: number) => void;
  notifyWarning: (msg: string, duration?: number) => void;
  notifyInfo: (msg: string, duration?: number) => void;
  notifyError: (msg: string, duration?: number) => void;
  toast: (msg: string, options: OptionsObject) =>void;
}

export default INotification;
