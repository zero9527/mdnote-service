import { RouterContext } from 'koa-router';
import { ResBody } from '../interface';
import { getRandomStr } from '../../utils';

// 登录
export function login(
  ctx: RouterContext,
  next: () => Promise<any>
) {
  console.log('login-req-body: ', ctx.request.body);
  const res: ResBody = {
    // status: 200,
    error_code: 1,
    data: {
      name: ctx.request.body.name,
      access_token: getRandomStr()
    },
    msg: '登录成功！'
  };
  ctx.body = res;

  next();
}

// 注册
export function register(
  ctx: RouterContext,
  next: () => Promise<any>
) {
  console.log('register-req-body: ', ctx.request.body);
  const res: ResBody = {
    // status: 200,
    error_code: 1,
    data: {},
    msg: '注册成功！'
  };
  ctx.body = res;

  next();
}
