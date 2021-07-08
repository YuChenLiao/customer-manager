import { FC, useState } from 'react';
import { Card, PageHeader, Tag, Row, Col, Menu } from 'antd';
import { Loading, connect, defaultState } from 'umi';
import NameList from './components/nameList';
import styles from './roomList.less';

const { CheckableTag } = Tag;

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const RoomList: FC<PageProps> = (props) => {
  const { global } = props;
  const [type, setType] = useState('simple');
  const { roomInfo } = global;
  const { roomList } = roomInfo;

  const handleClick = (e: any) => {
    setType(e.key);
  };

  const MainPage = (type: any) => {
    console.log(type.type);
    switch (type.type) {
      case 'simple':
        return <NameList list={roomList.simple} />;
      case 'double':
        return <NameList list={roomList.double} />;
      default:
        return null;
    }
  };

  return (
    <PageHeader title="客房名单">
      <Menu mode="horizontal" selectedKeys={[type]} onClick={handleClick}>
        <Menu.Item key="simple">单人间</Menu.Item>
        <Menu.Item key="double">双人间</Menu.Item>
      </Menu>
      <Card>
        <MainPage type={type} />
      </Card>
    </PageHeader>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(RoomList);
