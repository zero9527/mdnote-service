import router from 'koa-router';
import { getFile, uploadFile } from '../controllers/file';

const Router = new router();

Router.get('/getFile', getFile);
Router.post('/uploadFile', uploadFile);

export default Router;
