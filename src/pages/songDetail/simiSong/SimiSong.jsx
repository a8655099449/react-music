import React from 'react';
import styles from './SimiSong.less';
import BaseTitle from '@/components/baseTitle/baseTitle';

export default props => {
  let { simiSongs, changeSongData } = props;
  return (
    <div>
      <BaseTitle title="相似歌曲" />

      <div className={`${styles['list']}`}>
        {simiSongs.map((item, index) => {
          return (
            <div className={`${styles['list-item']}`} key={index}>
              <div className={`${styles['song-data']}`}>
                <div
                  className={`${styles['song-name']} text-row-1 underline`}
                  onClick={() => {
                    changeSongData(item, 'changeSong');
                  }}
                >
                  {item.name}
                </div>
                <div className={`${styles['singer']} text-row-1 underline`}>
                  {item.artists[0].name}
                </div>
              </div>
              <div className={`${styles['icon-box']}`}>
                <i
                  className={`iconfont icon-icon_play click`}
                  title="播放"
                  onClick={() => {
                    changeSongData(item, 'playSong');
                  }}
                ></i>
                <i
                  className={`iconfont icon-jiahaocu click`}
                  title="添加到播放列表"
                  onClick={() => {
                    changeSongData(item, 'addPlayList');
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
