import { getOS } from './public/utils/Tools';
const config = require('../package.json');

/**
 * @description 根据当前设备类型，加载对应的页面
 */
if (getOS().isAndroid || getOS().isPhone || getOS().isTablet || getOS().isWindowsPhone) {
    require(`./module-${config.module}/mobile/index`);
} else {
    require(`./module-${config.module}/pc/index`);
}


 
