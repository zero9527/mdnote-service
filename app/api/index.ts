const router1 = require('koa-router')();
const file_api = require('./file_api');

router1.use('/file', file_api.routes(), file_api.allowedMethods());

module.exports = router1;
