import { FC, useState } from 'react';
import { Tag, Row, Col, Menu } from 'antd';
import styles from './nameList.less';

const { CheckableTag } = Tag;

const NameList = ({ list, onClick, selected }: any) => {
  const checkItems = (checked: any) => {
    console.log(checked);
  };

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
            checked={item.status}
            className={styles['name-list__item']}
            key={item.name}
            onChange={(checked: any) => checkItems(checked)}
          >
            {item.name}
          </CheckableTag>
        </Col>
      ))}
    </Row>
  );
};

export default NameList;
