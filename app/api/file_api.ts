const router2 = require('koa-router')();
const file_controller = require('../controllers/file_controller');

router2.get('/getFile', file_controller.getFile);

module.exports = router2;
