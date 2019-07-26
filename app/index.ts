import Koa from 'koa';
import os from 'os';
import router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import chalk from 'chalk';
import api from './api';
import { RouterContext } from 'koa-router';

const App = new Koa();
const Router = new router();

App.use(bodyParser());

App.use(async (ctx: RouterContext, next: () => Promise<any>) => {
  console.log('ctx: ', ctx);
  await next();
});

Router.use('/api', api.routes(), api.allowedMethods());
App.use(Router.routes());

const port = 2333;
App.listen(port, () => {
  const local = os.networkInterfaces().en0.find(item => item.family === 'IPv4');
  const IP = local!.address;
  
  console.log(`${chalk.cyan('服务已启动，地址：')}\n
    1、localhost:${port}
    2、${IP}:${port}
  `);
});

module.exports = App;
