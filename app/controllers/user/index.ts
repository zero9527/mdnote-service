import { RouterContext } from 'koa-router';
import { ResBody } from '../interface';

// 登录
export function login(
  ctx: RouterContext,
  next: () => Promise<any>
) {
  console.log('ctx.request: ', ctx.request);
  const res: ResBody = {
    // status: 200,
    error_code: 1,
    data: {},
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
  console.log('ctx.request: ', ctx.request);
  const res: ResBody = {
    // status: 200,
    error_code: 1,
    data: {
      access_token: 'dfjkdst56df56dfd5jfkdjkfdf'
    },
    msg: '注册成功！'
  };
  ctx.body = res;

  next();
}
