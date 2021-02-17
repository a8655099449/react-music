import React from 'react';
import styles from './PlayListTable.less';
let listHead = ['', '歌曲标题', '时长', '歌手', '专辑'];
import { parseSongTime, playNewSong } from '@/assets/js/tool';
import { goAlbum, goSinger, goSongPage } from '../../assets/js/linkto';

export default props => {
  let { tracks = [], showHead = true } = props;

  let headStyle = {
    display: showHead ? 'block' : 'none',
  };

  return (
    <div className={`${styles['song-list']}`}>
      <div style={headStyle}>
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
      </div>

      <ul
        className={`${styles['list-warp']}`}
        style={{
          borderTop: showHead ? 'none' : '1px solid #d9d9d9',
        }}
      >
        {tracks.map((item, index) => {
          let zj = '';
          let time = parseSongTime(item.dt / 1000);
          if (item.alia[0]) {
            zj = `- (${item.alia[0]})`;
          }

          return (
            <li className={`${styles['warp']}`} key={index}>
              <div
                className={`${styles['item']}`}
                onClick={() => {
                  console.log(item);
                  playNewSong({
                    singerName: item.ar[0].name,
                    songId: item.id,
                    songName: item.name,
                    dt: item.dt,
                  });
                }}
              >
                {index + 1}
                <i className="iconfont icon-ziyuan"></i>
              </div>
              <div
                className={`${styles['item']} text-row-1 underline`}
                onClick={() => goSongPage(item.id)}
              >
                {item.name} <span>{zj}</span>
              </div>
              <div className={`${styles['item']}`}>{time}</div>
              <div
                className={`${styles['item']} text-row-1 underline`}
                onClick={() => goSinger(item.ar[0].id)}
              >
                {item.ar[0].name}
              </div>
              <div
                className={`${styles['item']} text-row-1 underline`}
                onClick={() => goAlbum(item.al.id)}
              >
                {item.al.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
