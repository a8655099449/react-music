import React from 'react';
import styles from './loginBar.less';
import event from '@/assets/js/event';

export default props => {
  let { userInfo, isLogin } = props;
  function showLogin() {
    event.emit('showLogin');
  }

  let notLoginDom = (
    <div>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div
        className={`${styles['login-btn']} btn-main btn`}
        onClick={showLogin}
      >
        用户登录
      </div>
    </div>
  );
  let isLoginDom = (
    <div className={`${styles['islogin-warp']}`}>
      <div className={`${styles['top']}`}>
        <div className={`${styles['left']}`}>
          <img src="" alt="" />
        </div>
        <div className={`${styles['right']}`}>
          <div className={`${styles['name-box']}`}>我是名字</div>
        </div>
      </div>
    </div>
  );

  let dom = isLogin ? isLoginDom : notLoginDom;

  return <div className={`${styles['login']}`}>{dom}</div>;
};
