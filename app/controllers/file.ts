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
    console.log('ctx--uploadFile: ', ctx.request.files);
    const res: ResBody = {
      status: 200,
      data: {
        path: saveFile(ctx.request.files!.file)
      },
      msg: 'success'
    };
    ctx.body = res;

    next();
  }
);

// 保存文件，返回文件路径
function saveFile(file: any): string {
  let frs: any = fs.createReadStream(file.path);
  let name = file.name.split('.');
  const ext = name.pop();
  const filePath = path.resolve(
    `${process.env.src}/public/upload/${name.join('.')}.${
      Date.now()
    }.${
      Math.random()
    }.${ext}`
  );
  console.log('filePath: ', filePath);
  const crs = fs.createWriteStream(filePath);
  frs.pipe(crs);

  return filePath;
}

export default Router;
