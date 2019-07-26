import { RouterContext } from 'koa-router';
import { ResBody } from '../interface';

export async function getFile(
  ctx: RouterContext, 
  next: () => Promise<any>
) {
  console.log('ctx--getFile: ', ctx);
  const res: ResBody = {
    // status: 200,
    error_code: 1,
    data: 'getFile',
    msg: ''
  };
  ctx.body = res;

  next();
};

export async function uploadFile(
  ctx: RouterContext, 
  next: () => Promise<any>
) {
  console.log('ctx--uploadFile: ', ctx);
  const res: ResBody = {
    // status: 200,
    error_code: 1,
    data: 'uploadFile',
    msg: ''
  };
  ctx.body = res;

  next();
};
