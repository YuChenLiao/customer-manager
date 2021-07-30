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
  const [type, setType] = useState('单人间');
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
          <Button type="primary" danger block onClick={deleteRoom}>
            删除房间
          </Button>
          <Divider />
          <Button type="primary" block onClick={changeStatus}>
            设置禁用
          </Button>
        </div>
      ),
    });
  };

  const deleteRoom = () => {};

  const changeStatus = () => {};

  const MainPage = (type: any) => {
    switch (type.type) {
      case '单人间':
        return <NameList list={roomList.simple} click={clickRoom} />;
      case '双人间':
        return <NameList list={roomList.double} click={clickRoom} />;
      default:
        return null;
    }
  };

  return (
    <PageHeader title="客房名单">
      <Menu mode="horizontal" selectedKeys={[type]} onClick={handleClick}>
        <Menu.Item key="单人间">单人间</Menu.Item>
        <Menu.Item key="双人间">双人间</Menu.Item>
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
