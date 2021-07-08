import { FC, useState } from 'react';
import { Card, PageHeader, Tag, Row, Col, Menu } from 'antd';
import { Loading, connect, defaultState } from 'umi';
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

  const NameList = ({ list }: any) => {
    console.log(list);
    return (
      <Row>
        {list.map((item: any) => (
          <Col
            xs={8}
            md={6}
            sm={4}
            lg={6}
            xl={4}
            key={item.name}
            style={{
              marginBottom: 12,
            }}
            className={styles['name-wrapper']}
          >
            <CheckableTag
              checked={true}
              className={styles['name-list__item']}
              key={item.name}
            >
              {item.name}
            </CheckableTag>
          </Col>
        ))}
      </Row>
    );
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
