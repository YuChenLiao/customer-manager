import { useState, FC } from 'react';
import {
  Card,
  Input,
  Select,
  Button,
  Menu,
  Form,
  Radio,
  PageHeader,
  Modal,
} from 'antd';
import { Loading, connect, defaultState, Dispatch, history } from 'umi';

interface PageProps {
  global: defaultState;
  loading: boolean;
  dispatch: Dispatch;
}

const { Option } = Select;

const IndexPage: FC<PageProps> = (props) => {
  const [pageKey, setPage] = useState('checkIn');
  const [roomType, setType] = useState('');
  const { global } = props;

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };

  const CheckIn = () => {
    let formValue = {
      name: '',
      code: '',
      phone: '',
      type: '',
      room: '',
    };
    const handleName = (e: any) => {
      formValue.name = e.target.value;
    };

    const changeType = (e: any) => {
      setType(e.target.value);
      formValue.type = e.target.value;
    };

    const handlePhone = (e: any) => {
      formValue.phone = e.target.value;
    };

    const handleCode = (e: any) => {
      formValue.code = e.target.value;
    };

    const handleRoom = (value: any) => {
      formValue.room = value;
    };

    const submitForm = () => {
      const { dispatch } = props;
      dispatch({
        type: 'global/changePost',
        payload: {
          name: formValue.name,
          code: formValue.code,
          phone: formValue.phone,
          type: formValue.type,
          room: formValue.room,
        },
      });
      dispatch({
        type: 'global/submitForm',
      });
    };

    const Options = (type: any) => {
      const list = [];
      const { global } = props;
      const { roomInfo } = global;
      const { roomList } = roomInfo;
      switch (type) {
        case '单人间':
          for (let i = 0; i < roomList.simple.length; i++) {
            if (roomList.simple[i].status === '未入住')
              list.push(
                <Option value={roomList.simple[i].name} key={i}>
                  {roomList.simple[i].name}
                </Option>,
              );
          }
        case '双人间':
          for (let i = 0; i < roomList.double.length; i++) {
            if (roomList.double[i].status === '未入住')
              list.push(
                <Option value={roomList.simple[i].name} key={i}>
                  {roomList.simple[i].name}
                </Option>,
              );
          }
        default:
      }
      return list;
    };

    return (
      <Card>
        <Form {...layout}>
          <Form.Item label="姓名">
            <Input id="name" onBlur={handleName} />
          </Form.Item>
          <Form.Item label="身份证号">
            <Input id="code" onBlur={handleCode} />
          </Form.Item>
          <Form.Item label="手机">
            <Input id="phone" onBlur={handlePhone} />
          </Form.Item>
          <Form.Item name="type" label="房间类型">
            <Radio.Group value={roomType} onChange={changeType}>
              <Radio value="单人间">单人间</Radio>
              <Radio value="双人间">双人间</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="房间号">
            <Select onChange={handleRoom}>{Options(roomType)}</Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={submitForm}>
              确定
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  };

  const fee = () => {
    Modal.info({
      content: <div>应付金额为：{global.cost}</div>,
    });
  };

  const CheckOut = () => {
    return (
      <Card>
        <Form {...layout}>
          <Form.Item label="房间号">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={fee}>
              确定
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  };

  const MainPage = ({ pageKey }: any) => {
    switch (pageKey) {
      case 'checkIn':
        return <CheckIn />;
      case 'checkOut':
        return <CheckOut />;
      default:
        return null;
    }
  };

  const handleClick = (e: any) => {
    setPage(e.key);
  };

  return (
    <PageHeader title="首页">
      <Menu mode="horizontal" selectedKeys={[pageKey]} onClick={handleClick}>
        <Menu.Item key="checkIn">入住</Menu.Item>
        <Menu.Item key="checkOut">退房</Menu.Item>
      </Menu>
      <MainPage pageKey={pageKey} />
    </PageHeader>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(IndexPage);
