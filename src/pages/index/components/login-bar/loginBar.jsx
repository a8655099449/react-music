import React from 'react';
import styles from './loginBar.less';

export default () => {
  return (
    <div className={`${styles['login']}`}>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div className={`${styles['login-btn']} btn-main btn`}>用户登录</div>
    </div>
  );
};
