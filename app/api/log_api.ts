import router from 'koa-router';
import { logUpload } from '../controllers/log';

const Router = new router();

Router.post('/logUpload', logUpload);

export default Router;
