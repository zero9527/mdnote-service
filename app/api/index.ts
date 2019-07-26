import router from 'koa-router';
import file_api from './file_api';
import user_api from './user_api';

const Router = new router();

Router.use('/file', file_api.routes(), file_api.allowedMethods());
Router.use('/user', user_api.routes(), user_api.allowedMethods());

export default Router;
