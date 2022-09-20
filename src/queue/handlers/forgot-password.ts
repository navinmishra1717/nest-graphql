import { Handler, HandlerType } from '../handlerType';

export const forgotPasswordHandler: Handler<HandlerType.ForgotPassword> = async (param) => {
  const {
    data: { email, token },
  } = param;

  return {
    email,
    token,
  };
};
