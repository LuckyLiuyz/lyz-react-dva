const config = require('../package.json');

/**
 * @description 根据不同的模块，引用不同的入口文件
 */
require(`./module-${config.module}/index`);
