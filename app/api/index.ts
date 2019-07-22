const apiRouter = require('koa-router')();
const file_api = require('./file_api');

apiRouter.use('/file', file_api.routes(), file_api.allowedMethods());

export default apiRouter;
