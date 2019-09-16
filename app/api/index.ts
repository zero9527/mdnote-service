import router from 'koa-router';
import log_api from './log_api';
import file_api from './file_api';
import user_api from './user_api';

const Router = new router();

Router.use('/log', log_api.routes(), log_api.allowedMethods());
Router.use('/file', file_api.routes(), file_api.allowedMethods());
Router.use('/user', user_api.routes(), user_api.allowedMethods());

export default Router;
