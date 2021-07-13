import { FC, useState } from 'react';
import { Card, PageHeader, Menu, Modal, Button, Divider } from 'antd';
import { Loading, connect, defaultState } from 'umi';
import NameList from './components/nameList';

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

  const clickRoom = (item: object) => {
    console.log(item);
    const modal = Modal.info(item);
    modal.update({
      title: '请选择要执行的操作',
      centered: true,
      width: '20%',
      maskClosable: true,
      okText: '取消',
      content: (
        <div>
          <Button shape="round" type="primary" danger>
            删除房间
          </Button>
          <Button shape="round" type="primary">
            设置禁用
          </Button>
        </div>
      ),
    });
  };

  const MainPage = (type: any) => {
    switch (type.type) {
      case 'simple':
        return <NameList list={roomList.simple} click={clickRoom} />;
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
