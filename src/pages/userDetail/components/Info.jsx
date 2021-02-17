import React, { useContext } from 'react';
import styles from '../userDatail.less';

import Image from '@/components/Image/Image';
import Context from '@/context';

import { GenderIcon } from '@/assets/js/tool';

export default props => {
  const { id, userInfo } = useContext(Context);

  return (
    <div className={`${styles['user-info']}`}>
      <div className={`${styles['avatar']}`}>
        <Image src={`${userInfo.profile.avatarUrl}?param=180y180`} />
      </div>
      <div className={`${styles['desc']}`}>
        <div className={`${styles['uname']}`}>
          <div>{userInfo.profile.nickname}</div>
          <div>lv. {userInfo.level} </div>
          <GenderIcon type={userInfo.profile.gender} />
          <div className={`btn btn-gray`}>
            <i className={`${styles['classname']} icon-youjian1 iconfont`}></i>{' '}
            发私信
          </div>
          <div className={`btn btn-blue`}>
            <i className={`${styles['classname']} icon-jiahaocu iconfont`}></i>{' '}
            关注
          </div>
        </div>
        <div className={`${styles['fans']}`}>
          <div className={`${styles['item']}`}>
            <div>{userInfo.profile.eventCount}</div>
            <div>动态</div>
          </div>
          <div className={`${styles['item']}`}>
            <div>{userInfo.profile.follows}</div>
            <div>关注</div>
          </div>
          <div className={`${styles['item']}`}>
            <div>{userInfo.profile.followeds}</div>
            <div>粉丝</div>
          </div>
        </div>
        <div className={`${styles['signature']}`}>
          个人介绍: {userInfo.profile.signature || userInfo.profile.description}
        </div>
      </div>
    </div>
  );
};
