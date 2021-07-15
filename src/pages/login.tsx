import { useState, FC } from 'react';
import { Form, Card, Input, Button } from 'antd';
import { Loading, connect, defaultState, Dispatch } from 'umi';
import style from './login.less';

interface PageProps {
  global: defaultState;
  loading: boolean;
  dispatch: Dispatch;
}

const Login: FC<PageProps> = (props) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };

  return (
    <Card className={style.loginBack}>
      <Card className={style.loginCard}>
        <Form {...layout}>
          <Form.Item label="用户名">
            <Input></Input>
          </Form.Item>
          <Form.Item label="密码">
            <Input></Input>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary">登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </Card>
  );
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(Login);
