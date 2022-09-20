import { Inject } from '@nestjs/common';
import { Handler, HandlerType } from '../handlerType';

/**
 * Send Email Verify Token on register
 *
 */

export const signupHandler: Handler<HandlerType.Register> = async (param) => {
  const {
    data: { email },
  } = param;

  return {
    email,
  };

  //   const user = await PostService.findOne(1);
};
