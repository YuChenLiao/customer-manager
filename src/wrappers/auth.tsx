import { Redirect, history } from 'umi';

export default (props: any) => {
  const isLogin = localStorage.getItem('isLogin');
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
