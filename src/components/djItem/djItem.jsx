import React from 'react';
import styles from './djItem.less';

import Image from '@/components/Image/Image';

export default props => {
  let { item } = props;
  let ganderClass = `gander${item.dj.gender}`;
  //

  let gander = <i className={`${styles[ganderClass]}`}></i>;
  return (
    <div className={`${styles['dj-item']}`}>
      <div className={`${styles['img-warp']}`}>
        <Image src={`${item.picUrl}?param=200y200`} />
      </div>
      <div
        className={`${styles['name']} text-row-1 underline`}
        dangerouslySetInnerHTML={{ __html: item.name }}
      ></div>
      <div className={`${styles['dj-name']} text-row-1`}>
        <span>by</span>{' '}
        <span className={`underline text-row-1`}>{item.dj.nickname}</span>{' '}
        {gander}
      </div>
    </div>
  );
};
