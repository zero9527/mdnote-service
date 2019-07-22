import { RouterContext } from 'koa-router';
import { ResBody } from './interface';

exports.getFile = async (ctx: RouterContext, next: () => Promise<any>) => {
  console.log('ctx--getFile: ', ctx);
  const res: ResBody = {
    status: 200,
    data: 'getFile',
    msg: ''
  };
  ctx.body = res;

  next();
};
