import React from 'react';
import styles from './songList.less';

import { parseSongTime } from '@/assets/js/tool';
let listHead = ['', '歌曲标题', '时长', '歌手', '专辑'];

export default props => {
  let { tracks = [] } = props;

  console.log(tracks);

  return (
    <div className={`${styles['song-list']}`}>
      <div className={`${styles['head']}`}>
        <div className={`${styles['left']}`}>
          歌曲列表 <span>30首歌</span>
        </div>
        <div className={`${styles['right']}`}>
          播放: <span>10603479</span> 次
        </div>
      </div>

      {/* <tbody></tbody> */}
      <div className={`${styles['list-head']} ${styles['warp']}`}>
        {listHead.map((item, index) => {
          return (
            <div
              className={`${styles['head-item']} ${styles['item']}`}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <ul className={`${styles['list-warp']}`}>
        {tracks.map((item, index) => {
          let zj = '';
          // console.log(item.dt);
          let time = parseSongTime(item.dt / 1000);
          if (item.alia[0]) {
            zj = `- (${item.alia[0]})`;
          }

          return (
            <li className={`${styles['warp']}`} key={index}>
              <div className={`${styles['item']}`}>
                {index + 1}
                <i className="iconfont icon-ziyuan"></i>
              </div>
              <div className={`${styles['item']} text-row-1 underline`}>
                {' '}
                {item.name} <span>{zj}</span>
              </div>
              <div className={`${styles['item']}`}>{time}</div>
              <div className={`${styles['item']} text-row-1 underline`}>
                {item.ar[0].name}
              </div>
              <div className={`${styles['item']} text-row-1`}>
                {item.al.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
