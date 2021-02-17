// 私人定制
import ItemTitle from './itemTitle';
import React, { useEffect } from 'react';
import styles from './customize.less';
import Swiper from 'swiper';
import { history } from 'umi';
import Image from '@/components/Image/Image';

import { addPlayList } from '@/assets/js/tool';

import { goSongPage, goAlbum } from '@/assets/js/linkto';

import Loading from '@/components/loading/Loading2';
const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

const handleItemClick = item => {
  let songId = item.resourceExtInfo.songData.id;
  if (item.resourceType === 'song') {
    history.push({
      pathname: '/songdetail',
      query: {
        songId,
      },
    });
  }
};

export default props => {
  let { baseData } = props;

  if (!baseData) {
    return loadContent;
  }

  const renderSwiper = params => {
    new Swiper('.' + styles['swiper-container'], {
      slidesPerView: 'auto',
    });
  };
  useEffect(renderSwiper, [baseData]);

  let title =
    baseData.uiElement.mainTitle.title +
    ' / ' +
    baseData.uiElement.subTitle.title;

  let bigList = baseData.creatives;

  const playAll = () => {
    let songList = [];
    for (let i = 0; i < bigList.length; i++) {
      let smallList = bigList[i].resources.map(item => {
        return {
          singerName: item.resourceExtInfo.songData.artists[0].name,
          songId: item.resourceExtInfo.songData.id,
          songName: item.resourceExtInfo.songData.name,
          dt: item.resourceExtInfo.songData.duration,
        };
      });
      songList.push(...smallList);
    }
    addPlayList(songList);
  };

  return (
    <div className={`${styles['customize']}`}>
      <ItemTitle
        title={title}
        type={1}
        icon="icon-headphones1179248easyiconnet"
      >
        <div
          className={`${styles['play-btn']}`}
          onClick={playAll}
          title="播放全部"
        >
          <i className={`iconfont icon-icon_play`}></i> 播放
        </div>
      </ItemTitle>
      <div className={`${styles['swiper-container']}`}>
        <div className={` swiper-wrapper ${styles['swiper-wrapper']}`}>
          <SwiperContent list={bigList} />
        </div>
      </div>
    </div>
  );
};

const SwiperContent = props => {
  let { list } = props;

  return list.map((item, index) => {
    return (
      <div className={`${styles['content']} swiper-slide`} key={index}>
        {item.resources.map((item2, index2) => {
          let songName = item2.resourceExtInfo.songData.name;
          let artists = item2.resourceExtInfo.artists[0].name;

          let desc = item2.uiElement.subTitle
            ? item2.uiElement.subTitle.title
            : item2.uiElement.mainTitle.title;

          return (
            <div className={`${styles['list-item']}`} key={index2}>
              <div
                className={`${styles['img-warp']}`}
                onClick={() => goSongPage(item2.resourceExtInfo.songData.id)}
              >
                <Image
                  src={item2.uiElement.image.imageUrl + '?param=50y50'}
                  alt={songName}
                />
              </div>
              <div className={`${styles['desc']}`}>
                <div className={`${styles['song-title']} text-row-2 `}>
                  <span
                    className={`underline ${styles['songname']}`}
                    onClick={() =>
                      goSongPage(item2.resourceExtInfo.songData.id)
                    }
                  >
                    {songName}
                  </span>{' '}
                  -
                  <span
                    className={`${styles['album-name']}`}
                    onClick={() => goAlbum(item2.resourceExtInfo.artists[0].id)}
                  >
                    {artists}
                  </span>
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
};
