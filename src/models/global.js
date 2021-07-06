export default {
  namespace: 'global',
  state: {
    roomInfo: {
      roomList: {
        simple: [],
        double: [],
      },
    },
    personInfo: {
      name: '',
      code: '',
      count: '',
      log: [],
    },
    login: false,
    token: '', // 不进行持久化保存和登陆状态记录
  },
  effect: {},
  reducers: {},
};
