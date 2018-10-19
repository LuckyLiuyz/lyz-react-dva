const config = require('../package.json');

/**
 * @description 根据不同的模块，引用不同的入口文件.比如module-resume是个人简历模块。
 */
require(`./module-${config.module}/index`);