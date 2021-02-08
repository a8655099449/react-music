import React from 'react';
import styles from './MiniUi.less';
import MiniUi from './MiniUi';
import Image from '@/components/Image/Image';

export default props => {
  let { userInfo } = props;
  let lv = userInfo.level ? userInfo.level.level : 1;
  // console.log(userInfo);

  return (
    <div className={`${styles['user-info']}`}>
      <div className={`${styles['avatar']}`}>
        <Image src={`${userInfo.avatarUrl}?param=50y50`} />
      </div>
      <div className={`${styles['info']}`}>
        <p className={`${styles['uname']}`}>{userInfo.nickname}</p>
        <div className={`${styles['lv']}`}>
          <span>Lv.{lv}</span>
        </div>
      </div>
    </div>
  );
};
