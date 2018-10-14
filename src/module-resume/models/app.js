
export default {

  namespace: 'app',

  state: {
    pageIndex: 4, // [0,1,2,3,4]: [首页,关于我,技能栈,项目经历,联系我],
    pageList: [
      'Default', 'AboutMe', 'Skills', 'Experience', 'Works', 'Contact'
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changeState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
