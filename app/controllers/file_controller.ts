import { Context } from 'koa';
import { ResBody } from './interface';

exports.getFile = async (ctx: Context, next: any) => {
  console.log('ctx--getFile: ', ctx);
  const res: ResBody = {
    status: 200,
    data: 'getFile',
    msg: ''
  };
  ctx.body = res;

  next();
};
