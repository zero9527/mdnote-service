const fileRouter = require('koa-router')();
const file_controller = require('../controllers/file_controller');

fileRouter.get('/getFile', file_controller.getFile);

module.exports = fileRouter;
