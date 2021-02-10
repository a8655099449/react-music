import React, { useState } from 'react';
import styles from './LyricsItem.less';

import { parseSongTime, playNewSong } from '@/assets/js/tool';
import { goSongPage } from '@/assets/js/linkto';

export default props => {
  const l = 4;
  const [showMore, setshowMore] = useState(false);

  let { item } = props;
  if (!item || !item.lyrics) {
    return null;
  }

  let dt = parseSongTime(parseInt(item.dt / 1000));

  let showMoreContent;
  if (!item.lyrics || item.lyrics.length <= l) {
    showMoreContent = null;
  } else if (!showMore) {
    showMoreContent = (
      <div
        onClick={() => setshowMore(!showMore)}
        className={`${styles['show-more']}`}
      >
        <i className={`iconfont icon-xia-down`}></i>
        展开
      </div>
    );
  } else {
    showMoreContent = (
      <div
        onClick={() => setshowMore(!showMore)}
        className={`${styles['show-more']} `}
      >
        <i className={`iconfont icon-xia-down turn`}></i>
        收起
      </div>
    );
  }

  return (
    <div className={`${styles['lyrics-item']}`}>
      <header className={`${styles['h']}`}>
        <div
          className={`iconfont icon-ziyuan ${styles['header-name']} `}
          onClick={() => {
            const songData = {
              singerName: item.ar[0].name,
              songId: item.id,
              songName: item.name,
              dt: item.dt,
            };

            playNewSong(songData);
          }}
        ></div>
        <div
          className={` ${styles['header-name']} underline text-row-1`}
          onClick={() => {
            console.log(item.id);
            goSongPage(item.id);
          }}
        >
          {item.name}
        </div>
        <div className={`${styles['header-name']} underline text-row-1`}>
          {item.ar[0].name}
        </div>
        <div className={`${styles['header-name']} underline text-row-1`}>
          《{item.al.name}》
        </div>
        <div className={`${styles['header-name']} text-row-1`}>{dt}</div>
      </header>
      <ul>
        {item.lyrics.map((item, index) => {
          if (!showMore && index >= l) {
            return null;
          }
          return (
            <li dangerouslySetInnerHTML={{ __html: item }} key={index}></li>
          );
        })}
      </ul>
      {showMoreContent}
    </div>
  );
};
