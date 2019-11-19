import router, { RouterContext } from 'koa-router';
import fs from 'fs';
import path from 'path';
import send from 'koa-send';
import { ResBody } from './interface';

const Router = new router();

Router.get('/download', 
  async function getFile(
    ctx: RouterContext, 
    next: () => Promise<any>
  ) {
    console.log('ctx--getFile: ', ctx);
    const filename = 'file.txt';
    const filepath = `${process.env.src}/assets/${filename}`;
    
    var size = fs.statSync(filepath).size;
    var frs = fs.createReadStream(filepath);

    ctx.set('Content-Type', 'application/force-download');
    ctx.set('Content-Disposition', `attachment; filename=${filename}`);
    ctx.set('Content-Length', size+'');

    // frs.pipe(ctx.res);
    ctx.body = frs;

    next();
  }
);

Router.post('/uploadFile', 
  async function uploadFile(
    ctx: RouterContext, 
    next: () => Promise<any>
  ) {
    console.log('ctx--uploadFile: ', ctx);
    const res: ResBody = {
      status: 200,
      data: 'uploadFile',
      msg: ''
    };
    ctx.body = res;

    next();
  }
);

export default Router;
