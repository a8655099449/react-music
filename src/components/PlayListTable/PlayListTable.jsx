import React from 'react';
import styles from './PlayListTable.less';
let listHead = ['', '歌曲标题', '时长', '歌手', '专辑'];
import { parseSongTime } from '@/assets/js/tool';
import { history } from 'umi';

export default props => {
  let { tracks = [], showHead = true } = props;
  // console.log(tracks);

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
              <div
                className={`${styles['item']} text-row-1 underline`}
                onClick={() => {
                  history.push({
                    pathname: '/songdetail',
                    query: {
                      songId: item.id,
                    },
                  });
                }}
              >
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
