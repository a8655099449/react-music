import React from 'react';
import styles from './SideBar.less';

export default props => {
  let {
    sideBarShow,
    handleShowSideBar,
    isLogin,
    userInfo,
    handleLoginClick,
  } = props;

  let sideStyle = {
    display: sideBarShow ? 'block' : 'none',
  };
  let userDom;
  if (isLogin) {
    userDom = (
      <div className={`${styles['login-box']}`}>
        <div className={`${styles['avatar']}`}>
          <img src={userInfo.avatarUrl} alt="" />
        </div>
        <div className={`${styles['nickname']}`}>
          {' '}
          {userInfo.nickname} <span>lv 9</span>{' '}
        </div>

        <div className={`${styles['user-state']}`}>
          <div className={`${styles['state-item']}`}>
            <div>0</div>
            <div>动态</div>
          </div>
          <div className={`${styles['state-item']}`}>
            <div>0</div>
            <div>关注</div>
          </div>
          <div className={`${styles['state-item']}`}>
            <div>0</div>
            <div> 粉丝 </div>
          </div>
        </div>
      </div>
    );
  } else {
    userDom = (
      <div>
        <p>登录网易云音乐</p>
        <p>同步到手机</p>
        <div
          className={`${styles['login-btn']} btn btn-main`}
          onClick={handleLoginClick}
        >
          立即登录
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles['side-bar']}`} style={sideStyle}>
      <div className={`${styles['bg']}`} onClick={handleShowSideBar}></div>
      <div className={`${styles['content']}`}>
        <div className={`${styles['top-info']}`}>{userDom}</div>
      </div>
    </div>
  );
};
