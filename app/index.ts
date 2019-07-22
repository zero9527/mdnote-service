const Koa = require('koa');
// const os = require('os');
const router = require('koa-router')();
const api = require('./api');
import { RouterContext } from 'koa-router';

const app = new Koa();
app.use(async (ctx: RouterContext, next: () => Promise<any>) => {
  console.log('ctx: ', ctx);
  await next();
});

router.use('/api', api.routes(), api.allowedMethods());
app.use(router.routes(), router.allowedMethods());

const port = 2333;
app.listen(port, () => {
  // console.log('os: ', os.networkInterfaces());
  console.log('服务已启动，浏览器输入 localhost:', port);
});

module.exports = app;
