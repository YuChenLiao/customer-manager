import { useState, FC, useEffect } from 'react';
import { Form, Card, Input, Button, message } from 'antd';
import { Loading, connect, defaultState, Dispatch, history } from 'umi';
import style from './login.less';

interface PageProps {
  global: defaultState;
  loading: boolean;
  dispatch: Dispatch;
}

const Login: FC<PageProps> = (props) => {
  useEffect(() => {
    // 判断是否登录，如果已经登录则进行拦截
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) history.goBack();
  }, []);

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };

  const [userName, setName] = useState('');
  const [password, setPass] = useState('');

  const login = () => {
    history.push('/index');
    message.success('登录成功');
    localStorage.setItem('isLogin', 'true');
  };

  return (
    <Card className={style.loginBack}>
      <Card className={style.loginCard}>
        <Form {...layout}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input
              value={userName}
              onChange={(e: any) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              value={password}
              onChange={(e: any) => setPass(e.target.value)}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={login}>
              登录
            </Button>
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
