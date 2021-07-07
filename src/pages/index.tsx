import { useState, FC } from 'react';
import { Card, Input, Select, Button, Menu, Form, Divider, Radio } from 'antd';
import { Loading, connect, defaultState } from 'umi';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const { Option } = Select;

const IndexPage: FC<PageProps> = (props) => {
  console.log(props);
  const [pageKey, setPage] = useState('checkIn');
  const [roomType, setType] = useState('');

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
            <Input />
          </Form.Item>
          <Form.Item label="身份证号">
            <Input />
          </Form.Item>
          <Form.Item label="手机">
            <Input />
          </Form.Item>
          <Form.Item label="房间类型">
            <Radio.Group value={roomType} onChange={changeType}>
              <Radio value="simple">单人间</Radio>
              <Radio value="double">双人间</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="房间号">
            <Select>
              <Option value="simple">单人间</Option>
              <Option value="double">双人间</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary">确定</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  };

  const changeType = (e: any) => {
    setType(e.target.value);
  };

  const CheckOut = () => {
    return (
      <Card>
        <Form {...layout}>
          <Form.Item label="房间号">
            <Input />
          </Form.Item>
          <Form.Item label="费用"></Form.Item>
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
    <Card>
      <Menu mode="horizontal" selectedKeys={[pageKey]} onClick={handleClick}>
        <Menu.Item key="checkIn">入住</Menu.Item>
        <Menu.Item key="checkOut">退房</Menu.Item>
      </Menu>
      <Divider />
      <MainPage pageKey={pageKey} />
    </Card>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(IndexPage);
