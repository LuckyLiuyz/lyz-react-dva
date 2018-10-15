import dva from 'dva';
import './index.css';

localStorage.setItem('language', 'zh'); // 默认语言为中文

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

// 2. Plugins
// app.use();

// 3. Register global model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
