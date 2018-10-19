1、module-resume 未区分OS系统时（只有PC，还没拆出mobile时）与区分OS系统后，压缩文件大小变化在100K之内。



import dva from 'dva';
import './index.css';
import { getOS } from '../public/utils/Tools';


/**
 * @description 根据当前设备类型，加载对应的页面
 */
if (getOS().isAndroid || getOS().isPhone || getOS().isTablet || getOS().isWindowsPhone) {
    localStorage.setItem('language', 'zh_CN'); // 默认语言为中文
    // 1. Initialize
    const app = dva({
        initialState: {},
        onStateChange: (state) =>{
            // console.log('onStateChange(fn)', state);
            if(state.app.language){
                localStorage.setItem('language', state.app.language);
            } 
        },
    });
    // app.use(); // 2. Plugins
    app.model(require('./mobile/models/app.js').default);  // 3. Register global model
    app.router(require('./mobile/router.js').default); // 4. Router
    app.start('#root'); // 5. Start
} else {
    localStorage.setItem('language', 'zh_CN'); // 默认语言为中文
    // 1. Initialize
    const app = dva({
        initialState: {},
        onStateChange: (state) =>{
            // console.log('onStateChange(fn)', state);
            if(state.app.language){
                localStorage.setItem('language', state.app.language);
            } 
        },
    });
    // app.use(); // 2. Plugins
    app.model(require('./pc/models/app.js').default);  // 3. Register global model
    app.router(require('./pc/router.js').default); // 4. Router
    app.start('#root'); // 5. Start
}


 