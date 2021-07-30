import { Redirect, history } from 'umi';

export default (props: any) => {
  const isLogin = localStorage.getItem('isLogin');
  console.log(history.location.pathname);
  if (isLogin) {
    if (history.location.pathname === '/login') history.goBack();
    else return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
