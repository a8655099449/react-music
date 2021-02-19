import React from 'react';
import styles from './MvItem.less';
import Image from '@/components/Image/Image';
import { parseSongTime, parsePlayCount } from '@/assets/js/tool';
import { goMv } from '../../assets/js/linkto';

const Mvitem = props => {
  let { item, src = 'cover', type = 'mv' } = props;

  let playcount = parsePlayCount(item.playCount);
  let duration = parseSongTime(item.duration / 1000);

  return (
    <div className={`${styles['mv-item']}`} onClick={() => goMv(item.id)}>
      <div className={`${styles['cover']}`}>
        <Image src={item[src] + '?param=159y120'} />
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

export default Mvitem;
