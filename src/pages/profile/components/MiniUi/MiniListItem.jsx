import React from 'react';
import styles from './MiniUi.less';
import Image from '@/components/Image/Image';

export default props => {
  let { item } = props;

  return (
    <div className={`${styles['mini-list-item']}`}>
      <div className={`${styles['pic']}`}>
        <Image src={`${item.coverImgUrl}?param=50y50`} />
      </div>
      <div className={`${styles['desc']}`}>
        <div className={`${styles['item-name']} text-row-1`}>{item.name}</div>
        <div className={`${styles['item-count']}`}>{item.trackCount} 首歌</div>
      </div>
    </div>
  );
};
