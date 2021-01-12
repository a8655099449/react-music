// 私人定制
import ItemTitle from './itemTitle';
import React from 'react';
import styles from './customize.less';
import Swiper from 'swiper';
import { history } from 'umi';

import event from '@/assets/js/event';

class Customize extends React.Component {
  handleItemClick = item => {
    console.log(item);
    let songId = item.resourceExtInfo.songData.id;
    if (item.resourceType === 'song') {
      history.push({
        pathname: '/songdetail',
        query: {
          songId,
        },
      });
    }
    return;
    // let songId = item.resourceExtInfo.songData.id;
    // let songName = item.resourceExtInfo.songData.name;

    let singerName = item.resourceExtInfo.artists[0].name;
    let dt = item.resourceExtInfo.songData.duration;

    // event.emit('addNewSong')
    event.emit('addNewSong', { singerName, songId, songName, dt });
  };
  render() {
    setTimeout(() => {
      new Swiper('.' + styles['swiper-container'], {
        slidesPerView: 'auto',
      });
    }, 100);
    // console.log(t  his.props)
    let baseData = this.props.baseData;
    if (!baseData) {
      return null;
    }
    // console.log(baseData);
    let title =
      baseData.uiElement.mainTitle.title +
      ' / ' +
      baseData.uiElement.subTitle.title;

    let bigList = baseData.creatives;

    let listDom = bigList.map((item, index) => {
      // console.log(item);
      return (
        <div className={`${styles['content']} swiper-slide`} key={index}>
          {item.resources.map((item2, index2) => {
            let songName = item2.resourceExtInfo.songData.name;
            let artists = item2.resourceExtInfo.artists[0].name;

            let desc = item2.uiElement.subTitle
              ? item2.uiElement.subTitle.title
              : item2.uiElement.mainTitle.title;

            return (
              <div
                className={`${styles['list-item']}`}
                key={index2}
                onClick={() => {
                  this.handleItemClick(item2);
                }}
              >
                <div className={`${styles['img-warp']}`}>
                  <img src={item2.uiElement.image.imageUrl} alt="" />
                </div>
                <div className={`${styles['desc']}`}>
                  <div className={`${styles['song-title']} text-row-2 `}>
                    {songName} <span>- {artists}</span>
                  </div>
                  <div className={`${styles['desc-bottom']} text-row-1`}>
                    {desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });

    return (
      <div className={`${styles['customize']}`}>
        <ItemTitle title={title} type={1} />
        <div className={`${styles['swiper-container']}`}>
          <div className={` swiper-wrapper ${styles['swiper-wrapper']}`}>
            {listDom}{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default Customize;
