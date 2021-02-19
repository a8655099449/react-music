import React from 'react';
import styles from './AlbumItem.less';
import Image from '@/components/Image/Image';
import { goAlbum } from '../../assets/js/linkto';
import { formatTime } from '../../assets/js/tool';
const AlbumItem = props => {
  let { item, width = 100, showtime = false } = props;

  let timeContent = null;

  if (showtime) {
    let time = formatTime(item.publishTime, 'yyyy-MM-dd');

    timeContent = <div className={`${styles['time']}`}>{time}</div>;
  }

  return (
    <div
      className={`${styles['dvd-item']} `}
      title={item.name}
      onClick={() => goAlbum(item.id)}
    >
      <div className={`${styles['bg']}`}>
        <i className={`${styles['classname']} iconfont icon-bofang1`}></i>
        <Image src={`${item.picUrl}?param=${width}y${width}`} alt={item.name} />
      </div>
      <p className={`${styles['dvd-name']} text-row-1`}>{item.name}</p>
      <p className={`${styles['singer']} text-row-1`}>{item.artists[0].name}</p>
      {timeContent}
    </div>
  );
};

export default AlbumItem;
