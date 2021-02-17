import React from 'react';
import styles from './subscribers.less';
import BaseTitle from '@/components/baseTitle/baseTitle';
import Image from '@/components/Image/Image';
import { goUserDatail } from '@/assets/js/linkto';

export default props => {
  let { subscribers } = props;
  if (subscribers.length == 0) {
    return null;
  }
  return (
    <div>
      <BaseTitle title="喜欢这个歌单的人" />

      <div className={`${styles['subscribers-list']}`}>
        {subscribers.map((item, index) => {
          return (
            <div
              className={`${styles['list-item']}`}
              key={index}
              onClick={() => goUserDatail(item.userId)}
              title={item.nickname}
            >
              {/* <img  title={item.nickname} alt="头像" /> */}
              <Image
                src={`${item.avatarUrl}?param=40y40`}
                alt={item.nickname}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
