import router, { RouterContext } from 'koa-router';
import { ResBody } from './interface';

const Router = new router();

Router.post('/logUpload', 
  async function logUpload(
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
  }
);

export default Router;
