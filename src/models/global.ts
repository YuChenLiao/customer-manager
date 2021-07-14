import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface defaultState {
  roomInfo: {
    roomList: {
      simple: [
        {
          name: '123';
          status: '未入住';
          type: '单人间';
          number: 1;
        },
      ];
      double: any[];
    };
  };
  personInfo: [
    {
      id: '1010101';
      name: '123';
      count: 1;
      record: [
        {
          roomID: '202';
          date: '2021/7/1';
        },
      ];
    },
  ];
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
  };
}

const globalState: defaultModel = {
  namespace: 'global',
  state: {
    roomInfo: {
      roomList: {
        simple: [
          {
            name: '123',
            status: '未入住',
            type: '单人间',
            number: 1,
          },
        ],
        double: [],
      },
    },
    personInfo: [
      {
        id: '1010101',
        name: '123',
        count: 1,
        record: [
          {
            roomID: '202',
            date: '2021/7/1',
          },
        ],
      },
    ],
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
