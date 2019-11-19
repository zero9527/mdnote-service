import router from 'koa-router';
import app from './app';
import file from './file';
import log from './log';
import user from './user';

const Router = new router();

Router.use('/app', app.routes(), app.allowedMethods());
Router.use('/file', file.routes(), file.allowedMethods());
Router.use('/log', log.routes(), log.allowedMethods());
Router.use('/user', user.routes(), user.allowedMethods());

export default Router;
