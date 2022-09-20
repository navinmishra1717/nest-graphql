import { HandlerType } from '../handlerType';
import { QueueFactory } from '../queueFactory';
import * as signup from './signup';
import * as forgotPassword from './forgot-password';

export const handlers = [
  new QueueFactory<HandlerType.Register>(HandlerType.Register, signup.signupHandler),
  new QueueFactory<HandlerType.ForgotPassword>(HandlerType.ForgotPassword, forgotPassword.forgotPasswordHandler),
];
