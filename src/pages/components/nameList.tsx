import { FC, useState } from 'react';
import { Tag, Row, Col, Menu } from 'antd';
import styles from './nameList.less';

const { CheckableTag } = Tag;

const NameList = ({ list, click }: any) => {
  const checkItems = (checked: boolean, item: object) => {
    if (checked) click(item);
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
            checked={false}
            className={styles['name-list__item']}
            key={item.name}
            onChange={(checked: any) => checkItems(checked, item)}
          >
            {item.name}
          </CheckableTag>
        </Col>
      ))}
    </Row>
  );
};

export default NameList;
