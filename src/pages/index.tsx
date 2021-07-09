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
} from 'antd';
import { Loading, connect, defaultState, Dispatch } from 'umi';

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
    return (
      <Card>
        <Form {...layout}>
          <Form.Item label="姓名">
            <Input onChange={handleName} />
          </Form.Item>
          <Form.Item label="身份证号">
            <Input onChange={handleCode} />
          </Form.Item>
          <Form.Item label="手机">
            <Input onChange={handlePhone} />
          </Form.Item>
          <Form.Item label="房间类型">
            <Radio.Group value={roomType} onChange={changeType}>
              <Radio value="simple">单人间</Radio>
              <Radio value="double">双人间</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="房间号">
            <Select onChange={handleRoom}>
              <Option value="simple">单人间</Option>
              <Option value="double">双人间</Option>
            </Select>
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

  const changeType = (e: any) => {
    const { dispatch } = props;
    setType(e.target.value);
    dispatch({
      type: 'global/changePost',
      payload: {
        type: e.target.value,
      },
    });
  };

  const handleName = (e: any) => {
    const { dispatch } = props;
    dispatch({
      type: 'global/changePost',
      payload: {
        name: e.target.value,
      },
    });
  };

  const handlePhone = (e: any) => {
    const { dispatch } = props;
    dispatch({
      type: 'global/changePost',
      payload: {
        name: e.target.value,
      },
    });
  };

  const handleCode = (e: any) => {
    const { dispatch } = props;
    dispatch({
      type: 'global/changePost',
      payload: {
        name: e.target.value,
      },
    });
  };

  const handleRoom = (value: any) => {
    const { dispatch } = props;
    dispatch({
      type: 'global/changePost',
      payload: {
        name: value,
      },
    });
  };

  const submitForm = () => {};

  const CheckOut = () => {
    return (
      <Card>
        <Form {...layout}>
          <Form.Item label="房间号">
            <Input />
          </Form.Item>
          <Form.Item label="费用">{global.cost}元</Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary">确定</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  };

  const MainPage = (pageKey: any) => {
    switch (pageKey.pageKey) {
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
