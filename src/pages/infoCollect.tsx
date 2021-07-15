import { FC, useState } from 'react';
import {
  PageHeader,
  Card,
  Menu,
  Divider,
  List,
  Modal,
  Form,
  Button,
} from 'antd';
import { Loading, connect, defaultState, Dispatch } from 'umi';
import NameList from './components/nameList';

interface PageProps {
  global: defaultState;
  loading: boolean;
  dispatch: Dispatch;
}

const InfoCollect: FC<PageProps> = (props) => {
  const [type, setType] = useState('room');
  const { global } = props;
  const { roomInfo } = global;
  const { roomList } = roomInfo;
  const { personInfo } = global;

  const handleClick = (e: any) => {
    setType(e.key);
  };

  const clickRoom = (item: any) => {
    Modal.confirm({
      title: item.name + '号客房信息',
      width: '50%',
      onOk: () => {},
      onCancel: () => {},
      content: (
        <Form>
          <Form.Item label="客房类型">{item.type}</Form.Item>
          <Form.Item label="是否入住">{item.status}</Form.Item>
          <Form.Item label="历史入住人数">{item.count}</Form.Item>
        </Form>
      ),
    });
  };

  const MainPage = ({ type }: any) => {
    switch (type) {
      case 'room':
        return (
          <Card>
            <Card title="单人间">
              <NameList list={roomList.simple} click={clickRoom} />
            </Card>
            <Divider />
            <Card title="双人间">
              <NameList list={roomList.double} click={clickRoom} />
            </Card>
          </Card>
        );
      case 'person':
        return <Person />;
      default:
        return null;
    }
  };

  const checkRecord = (item: any) => {
    console.log(item);
    Modal.info({
      title: '旅客' + item.name + '的入住记录：',
      width: '70%',
      content: (
        <List
          size="default"
          bordered
          dataSource={item.record}
          renderItem={(item: any) => (
            <List.Item>
              <Form layout="inline">
                <Form.Item label="房间号">{item.roomID}</Form.Item>
                <Form.Item label="入住日期">{item.date}</Form.Item>
              </Form>
            </List.Item>
          )}
        />
      ),
    });
  };

  const Person = () => {
    return (
      <Card title="旅客信息">
        <List
          size="large"
          bordered
          dataSource={personInfo}
          renderItem={(item: any) => (
            <List.Item>
              <Form layout="inline">
                <Form.Item label="姓名">{item.name}</Form.Item>
                <Form.Item label="身份证号">{item.id}</Form.Item>
                <Form.Item label="入住次数">{item.count}</Form.Item>
                <Form.Item>
                  <Button type="link" onClick={() => checkRecord(item)}>
                    入住记录
                  </Button>
                </Form.Item>
              </Form>
            </List.Item>
          )}
        />
      </Card>
    );
  };

  return (
    <PageHeader title="信息统计">
      <Menu mode="horizontal" selectedKeys={[type]} onClick={handleClick}>
        <Menu.Item key="room">房间</Menu.Item>
        <Menu.Item key="person">旅客</Menu.Item>
      </Menu>
      <MainPage type={type} />
    </PageHeader>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(InfoCollect);
