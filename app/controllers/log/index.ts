import { RouterContext } from 'koa-router';
import { ResBody } from '../interface';

export async function logUpload(
  ctx: RouterContext, 
  next: () => Promise<any>
) {
  const res: ResBody = {
    status: 200,
    data: 'logUpload',
    msg: ''
  };
  ctx.body = res;

  next();
};
