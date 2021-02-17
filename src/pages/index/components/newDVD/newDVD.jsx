import React, { useEffect } from 'react';
import ItemTitle from '../itemTitle';
import swiper from 'swiper';
import styles from './newDVD.less';
import Image from '@/components/Image/Image';
import { goAlbum } from '../../../../assets/js/linkto';
export default props => {
  let { newDVDs } = props;

  useEffect(() => {
    new swiper('.' + styles['listwarp'], {
      slidesPerView: 'auto',
    });
  }, [newDVDs]);

  return (
    <div className={`${styles['new-dvd']}`}>
      <ItemTitle title="新碟上架" type={0} />
      <div className={`${styles['content']}`}>
        <div className={`${styles['listwarp']}  swiper-container `}>
          <div className={`${styles['listbox']}  swiper-wrapper `}>
            {newDVDs.map((item, index) => {
              return (
                <div
                  className={`${styles['dvd-item']} swiper-slide`}
                  key={index}
                  onClick={() => goAlbum(item.id)}
                >
                  <div className={`${styles['bg']}`}>
                    <Image
                      src={item.picUrl + '?param=100y100'}
                      alt={item.name}
                    />
                  </div>
                  <p className={`${styles['dvd-name']} text-row-1`}>
                    {item.name}
                  </p>
                  <p className={`${styles['singer']} text-row-1`}>
                    {item.artists[0].name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
