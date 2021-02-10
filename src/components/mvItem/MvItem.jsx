import React from 'react';
import styles from './MvItem.less';
import Image from '@/components/Image/Image';
import { parseSongTime, parsePlayCount } from '@/assets/js/tool';

export default props => {
  let { item } = props;

  let playcount = parsePlayCount(item.playCount);
  let duration = parseSongTime(item.duration / 1000);

  return (
    <div className={`${styles['mv-item']}`}>
      <div className={`${styles['cover']}`}>
        <Image src={item.cover} />
        <div className={`${styles['play-count']}`}>
          <i className={`${styles['classname']} icon-ziyuan iconfont`}></i>
          {playcount}
        </div>

        <div className={`${styles['time']}`}>{duration}</div>
      </div>
      <div className={`${styles['name']} text-row-2`}>{item.name}</div>
    </div>
  );
};