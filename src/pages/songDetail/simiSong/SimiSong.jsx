import React from 'react';
import styles from './SimiSong.less';
import BaseTitle from '@/components/baseTitle/baseTitle';

export default props => {
  let { simiSongs } = props;
  return (
    <div>
      <BaseTitle title="相似歌曲" />

      <div className={`${styles['list']}`}>
        <div className={`${styles['list-item']}`}></div>
      </div>
    </div>
  );
};
