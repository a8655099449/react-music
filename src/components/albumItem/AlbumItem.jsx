import React from 'react';
import styles from './AlbumItem.less';
import Image from '@/components/Image/Image';
export default props => {
  let { item, width = 100 } = props;

  return (
    <div className={`${styles['dvd-item']} `} title={item.name}>
      <div className={`${styles['bg']}`}>
        <Image src={`${item.picUrl}?param=${width}y${width}`} alt={item.name} />
      </div>
      <p className={`${styles['dvd-name']} text-row-1`}>{item.name}</p>
      <p className={`${styles['singer']} text-row-1`}>{item.artists[0].name}</p>
    </div>
  );
};
