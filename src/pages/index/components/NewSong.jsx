import React, { useState } from 'react';
import styles from '../index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '@/components/Image/Image';
import './new-song.css';

import 'swiper/swiper-bundle.css';

import Loading from '@/components/loading/Loading2';
import { goAlbum, goSongPage } from '../../../assets/js/linkto';
import { warningMsg } from '../../../assets/js/tool';
const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

let nav = [
  {
    title: '新歌',
    dataList: [],
    content: null,
    code: 'NEW_SONG_HOMEPAGE',
  },
  {
    title: '新碟',
    dataList: [],
    content: null,
    code: 'NEW_ALBUM_HOMEPAGE',
  },
  {
    title: '数字专辑',
    dataList: [],
    content: null,
    code: 'DIGITAL_ALBUM_HOMEPAGE',
  },
];

const NewSong = props => {
  let { newSong } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  if (!newSong) return loadContent;
  nav.forEach(item => {
    let arr = [];
    newSong.creatives.forEach(song => {
      if (song.creativeType === item.code) {
        arr.push(song);
      }
    });
    item.dataList = arr;
    // console.log(arr);

    if (arr.length > 0) {
      item.content = (
        <Swiper slidesPerView={'auto'}>
          {item.dataList.map((item2, index) => (
            <SwiperSlide key={index}>
              {item2.resources.map((item, index) => (
                <ListItem item={item} key={index} />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  });

  let content = (
    <SwiperSlide>
      <div className={`${styles['wrap']}`}>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </SwiperSlide>
  );

  return (
    <div className={`${styles['new-song']} new-song`}>
      <header>
        {nav.map((item, index) => (
          <div
            item={item}
            key={index}
            className={activeIndex == index ? styles['active'] : ''}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </div>
        ))}
      </header>

      <div className={`${styles['content']}`}>{nav[activeIndex].content}</div>
    </div>
  );
};

const clickItem = item => {
  switch (item.resourceType) {
    case 'song':
      goSongPage(item.resourceId);
      break;
    case 'album':
      // goSongPage(item.resourceId)
      goAlbum(item.resourceId);
      break;

    default:
      warningMsg();
      break;
  }
};

const ListItem = props => {
  let { item } = props;

  let subTitle = '';
  if (item.uiElement.subTitle && item.uiElement.subTitle.title) {
    subTitle = item.uiElement.subTitle.title;
  }
  return (
    <div className={`${styles['list-item']}`} onClick={() => clickItem(item)}>
      <div className={`${styles['pic']}`}>
        <Image src={`${item.uiElement.image.imageUrl}?param=60y60`} />
      </div>
      <div className={`${styles['desc']}`}>
        <h3 className="text-row-1">{item.uiElement.mainTitle.title}</h3>
        <div className="text-row-1">{subTitle}</div>
      </div>
    </div>
  );
};

export default NewSong;
