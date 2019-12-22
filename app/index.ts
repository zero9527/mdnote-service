import Koa from 'koa';
import os from 'os';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import router, { RouterContext } from 'koa-router';
import controllers from './controllers';

process.env.src = path.resolve(__dirname, '../');

const App = new Koa();
const Router = new router();

// post等请求参数获取
App.use(bodyParser());

// 所有请求的拦截
App.use(async (ctx: RouterContext, next: () => Promise<any>) => {
  console.log('ctx: ', ctx);
  await next();
});

// 静态资源服务
// App.use(KoaStatic(path.resolve(__dirname, '../views')));

// 网页渲染
App.use(async (ctx: RouterContext, next: () => Promise<any>) => {
  ctx.type = 'html';
  ctx.body = await fs.createReadStream(path.resolve(__dirname, '../views/index.html'));

  next();
})

// api 接口
// Router.use('/v1', controllers.routes(), controllers.allowedMethods());
App.use(controllers.routes());

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
