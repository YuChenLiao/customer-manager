export default {
  namespace: 'global',
  state: {
    roomInfo: {
      roomList: {
        simple: [],
        double: [],
      },
    },
    personInfo: [],
    postForm: {
      name: '',
      code: '',
      type: '',
      room: '',
      phone: '',
    },
    login: false,
    token: '', // 不进行持久化保存和登陆状态记录
  },
  effect: {},
  reducers: {
    initView(state, { payload }) {
      return {
        ...state,
        roomInfo: payload.roomInfo,
        personInfo: payload.personInfo,
      };
    },
    changeRoom(state, { payload }) {
      return {
        ...state,
        roomInfo: {
          ...state.roomInfo,
          ...payload,
        },
      };
    },
    changePerson(state, { payload }) {
      return {
        ...state,
        personInfo: {
          ...state.personInfo,
          ...payload,
        },
      };
    },
    changePost(state, { payload }) {
      return {
        ...state,
        postForm: {
          ...state.postForm,
          ...payload,
        },
      };
    },
  },
};
