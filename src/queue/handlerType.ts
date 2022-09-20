export enum HandlerType {
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
}

export interface HandlerJobData {
  [HandlerType.Register]: {
    email: string;
  };
  [HandlerType.ForgotPassword]: {
    email: string;
    token: string;
  };
}

export interface ParamData {
  name: HandlerType;
  data: HandlerJobData[HandlerType];
}

export type Handler<T extends HandlerType> = (param: { name: T; data: HandlerJobData[T] }) => any;
