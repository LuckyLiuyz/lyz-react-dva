import dva from 'dva';
import './index.css';


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
app.model(require('./models/app.js').default);  // 3. Register global model
app.router(require('./router.js').default); // 4. Router
app.start('#root'); // 5. Start


 