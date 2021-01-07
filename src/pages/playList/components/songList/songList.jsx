import React from 'react';
import styles from './songList.less';

let listHead = ['', '歌曲标题', '时长', '歌手', '专辑'];

export default () => {
  let songList = [1, 1, 3, 4, 5, 6, 677, 5];
  return (
    <div className={`${styles['song-list']}`}>
      <head>
        <div className={`${styles['left']}`}>
          歌曲列表 <span>30首歌</span>
        </div>
        <div className={`${styles['right']}`}>
          播放: <span>10603479</span> 次
        </div>
      </head>

      {/* <tbody></tbody> */}
      <div className={`${styles['list-head']}`}>
        {listHead.map((item, index) => {
          return (
            <div className={`${styles['head-item']}`} key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
