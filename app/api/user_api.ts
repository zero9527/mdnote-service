import router from 'koa-router';
import { login, register } from '../controllers/user';

const Router = new router();

Router.post('/login', login);
Router.post('/register', register);

export default Router;
