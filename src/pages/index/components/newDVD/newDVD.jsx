import React from 'react';
import ItemTitle from '../itemTitle';
import swiper from 'swiper';
import styles from './newDVD.less';

export default props => {
  let { newDVDs } = props;
  console.log(newDVDs);
  let list = [1, 2, 3, 4, 5, 2, 2, 2, 2, 2];
  setTimeout(() => {
    new swiper('.' + styles['listwarp'], {
      slidesPerView: 5,
      spaceBetween: 30,
      // slidesPerView: 'auto',
    });
  }, 100);

  return (
    <div className={`${styles['new-dvd']}`}>
      <ItemTitle title="新碟上架" type={0} />
      <div className={`${styles['content']}`}>
        <div className={`${styles['listwarp']}  swiper-container `}>
          <div className={`${styles['listbox']}  swiper-wrapper `}>
            {list.map((item, index) => {
              return (
                <div
                  className={`${styles['dvd-item']} swiper-slide`}
                  key={index}
                >
                  <div className={`${styles['bg']}`}>
                    <img
                      src="//p1.music.126.net/LOekHheOMDpdjuXrXWjfJg==/109951165483194861.jpg?param=177y177"
                      alt=""
                    />
                  </div>
                  <p className={`${styles['dvd-name']} text-row-1`}>
                    狼殿下 影视原声碟P
                  </p>
                  <p className={`${styles['singer']} text-row-1`}>群星</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
