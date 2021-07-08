import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface defaultState {
  roomInfo: {
    roomList: {
      simple: [];
      double: [];
    };
  };
  personInfo: [];
  postForm: {
    name: '';
    code: '';
    type: '';
    room: '';
    phone: '';
  };
  cost: '';
}

export interface defaultModel {
  namespace: 'global';
  state: defaultState;
  effects: {};
  reducers: {
    initView: Reducer<defaultState>;
    changeRoom: Reducer<defaultState>;
    changePerson: Reducer<defaultState>;
    changePost: Reducer<defaultState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
}

const globalState: defaultModel = {
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
    cost: '',
  },
  effects: {},
  reducers: {
    initView(state: any, { payload }: any) {
      return {
        ...state,
        roomInfo: payload.roomInfo,
        personInfo: payload.personInfo,
      };
    },
    changeRoom(state: any, { payload }: any) {
      return {
        ...state,
        roomInfo: {
          ...state.roomInfo,
          ...payload,
        },
      };
    },
    changePerson(state: any, { payload }: any) {
      return {
        ...state,
        personInfo: {
          ...state.personInfo,
          ...payload,
        },
      };
    },
    changePost(state: any, { payload }: any) {
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

export default globalState;
