import React from 'react';
import styles from './subscribers.less';
import BaseTitle from '@/components/baseTitle/baseTitle';

export default props => {
  let { subscribers } = props;
  return (
    <div>
      <BaseTitle title="喜欢这个歌单的人" />

      <div className={`${styles['subscribers-list']}`}>
        {subscribers.map((item, index) => {
          return (
            <div className={`${styles['list-item']}`} key={index}>
              <img src={item.avatarUrl} title={item.nickname} alt="头像" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
