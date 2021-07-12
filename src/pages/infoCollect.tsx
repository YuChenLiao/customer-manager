import { FC, useState } from 'react';
import { PageHeader, Card, Menu, Divider, List } from 'antd';
import { Loading, connect, defaultState, Dispatch } from 'umi';
import NameList from './components/nameList';
import { getBreadcrumbFromProps } from '@ant-design/pro-layout/lib/utils/getBreadcrumbProps';

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

  const clickRoom = (checked: boolean, item: object) => {
    const { dispatch } = props;
  };

  const MainPage = ({ type }: any) => {
    switch (type) {
      case 'room':
        return (
          <Card>
            <Card title="单人间">
              <NameList list={roomList.simple} />
            </Card>
            <Divider />
            <Card title="双人间">
              <NameList list={roomList.double} />
            </Card>
          </Card>
        );
      case 'person':
        return <Person />;
      default:
        return null;
    }
  };

  const Person = () => {
    return (
      <Card title="旅客信息">
        <List
          size="large"
          bordered
          dataSource={personInfo}
          renderItem={(item: any) => <List.Item>{item}</List.Item>}
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
