import router, { RouterContext } from 'koa-router';
import { ResBody } from './interface';
import { getRandomStr } from './../utils';

const Router = new router();

// 登录
Router.post('/login', login);
function login(
  ctx: RouterContext,
  next: () => Promise<any>
) {
  console.log('login-req-body: ', ctx.request.body);
  const { name } = ctx.request.body;
  const res: ResBody = {
    status: name !== 'admin' ? 401 : 200,
    data: {
      name,
      access_token: getRandomStr()
    },
    msg: name !== 'admin' ? '用户名或密码错误！' : '登录成功！'
  };
  // ctx.cookies.set('auth', Date.now()+'', {
  //   // domain: '',
  //   // path: '',
  //   maxAge: 7*24*60*60*1000, // 毫秒
  //   httpOnly: false, // 默认 true: JS不能读写HttpOnly Cookie
  //   // overwrite: true // 默认 false: 不覆盖同名 cookie
  // });
  ctx.body = res;
  next();
}

// 注册
Router.post('/register', 
  function register(
    ctx: RouterContext,
    next: () => Promise<any>
  ) {
    console.log('register-req-body: ', ctx.request.body);
    const res: ResBody = {
      status: 200,
      data: {},
      msg: '注册成功！'
    };
    ctx.body = res;

    next();
  }
);

export default Router;
