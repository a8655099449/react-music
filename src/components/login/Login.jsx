import React from 'react';
import styles from './Login.less';

export default () => {
  return (
    <div className={`${styles['login']}`}>
      <div className={`${styles['warp']}`}>
        <div className={`${styles['head']}`}>登录</div>
        <div className={`${styles['from-box']}`}>
          <p className={`${styles['from-item']}`}>
            <input type="text" name="" id="" placeholder="请输入手机号" />
          </p>
          <p className={`${styles['from-item']}`}>
            <input type="password" name="" id="" placeholder="请输入密码" />
          </p>
          <div>
            <div>
              {/* <input type="text"/> */}
              自动登录
            </div>
          </div>
          <button className={`${styles['login-btn']} btn`}>登录</button>
        </div>
      </div>
    </div>
  );
};
