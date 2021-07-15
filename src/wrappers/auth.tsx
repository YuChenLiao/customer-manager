import { Redirect } from 'umi';

export default (props: any) => {
  const isLogin = localStorage.getItem('isLogin');
  console.log(isLogin);
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/" />;
  }
};
