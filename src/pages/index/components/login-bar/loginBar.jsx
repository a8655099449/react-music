import React from 'react';
import styles from './loginBar.less';
import event from '@/assets/js/event';
import { showLogin } from '@/assets/js/tool';

export default props => {
  let { userInfo, isLogin } = props;

  let dom;
  if (isLogin) {
    let level = userInfo.level.level ?? 3;
    // console.log(userInfo);
    dom = (
      <div className={`${styles['islogin-warp']}`}>
        <div className={`${styles['top']}`}>
          <div className={`${styles['left']}`}>
            <img src={userInfo.avatarUrl} alt="" />
          </div>
          <div className={`${styles['right']}`}>
            <div className={`${styles['name-box']}`}>{userInfo.nickname}</div>
            <div className={`${styles['public-bg']} ${styles['level-box']}`}>
              {/* {userInfo.nickname.} */} {level}
              <span className={`${styles['public-bg']}`}></span>
              {/* <i></i> */}
            </div>
            <div className={`${styles['qd-btn']} btn btn-blue`}>签到</div>
          </div>
        </div>
        {/* 动态 关注 粉丝 */}
        <div className={`${styles['fans']}`}>
          <div className={`${styles['item']}`}>
            <div>{userInfo.eventCount}</div>
            <div>动态</div>
          </div>
          <div className={`${styles['item']}`}>
            <div>{userInfo.follows}</div>
            <div>关注</div>
          </div>
          <div className={`${styles['item']}`}>
            <div>{userInfo.followeds}</div>
            <div>粉丝</div>
          </div>
        </div>
      </div>
    );
  } else {
    dom = (
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
  }

  // let isLoginDom;

  // let dom = isLogin ? isLoginDom : notLoginDom;

  return <div className={`${styles['login']}`}>{dom}</div>;
};
