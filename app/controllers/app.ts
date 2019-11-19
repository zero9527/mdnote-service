import router, { RouterContext } from 'koa-router';
import { ResBody } from './interface';

const Router = new router();

Router.get('/getCurrentVersion', 
  async function getCurrentVersion (
    ctx: RouterContext, 
    next: () => Promise<any>
  ) {
    const res: ResBody = {
      status: 200,
      data: 'v0.2',
      msg: ''
    };
    ctx.body = res;

    next();
  }
);

export default Router;
