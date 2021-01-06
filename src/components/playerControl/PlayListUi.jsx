import React from 'react';
import styles from './PlayerControl.less';

export default props => {
  let { listShow, handleListShow, songList, lrcArr, songName } = props;
  if (!songList) {
    songList = [];
  }
  let listDom, lyricsDom;
  if (songList.length === 0) {
    listDom = <div className={`${styles['not-song']}`}>你没有添加任何歌曲</div>;
  } else {
    listDom = (
      <ul className={`${styles['paly-song-list']}`}>
        {songList.map((item, index) => {
          let arrowStyle = {
            display: item.isPlay ? 'block' : 'none',
          };
          return (
            <li key={item.songId}>
              <div className={`${styles['arrow']}`}>
                <i style={arrowStyle}></i>
              </div>
              <div className={`${styles['song-name']} text-row-1`}>
                {item.songName}
              </div>
              <div className={`${styles['handleList']}`}>
                <i className={`${styles['icon-1']}`}></i>
                <i className={`${styles['icon-2']}`}></i>
                <i className={`${styles['icon-3']}`}></i>
                <i className={`${styles['icon-4']}`}></i>
              </div>
              <div className={`${styles['singer-name']} text-row-1`}>
                {item.singerName}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  if (lrcArr.length > 0) {
    lyricsDom = (
      <div>
        <ul>
          {lrcArr.map((item, index) => {
            let itemClass = '';
            if (item.select) {
              itemClass = styles['select'];
            }

            return (
              <li key={index} className={itemClass}>
                {' '}
                {item.content}{' '}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  let boxStyle = {
    display: listShow ? 'block' : 'none',
  };

  return (
    <div className={`${styles['play-list']}`} style={boxStyle}>
      <div
        className={`${styles['close-bar']} iconfont icon-guanbi click`}
        onClick={handleListShow}
      ></div>

      <div className={`${styles['warp']}`}>
        <div className={`${styles['list-box']}`}>
          <div className={`${styles['head']}`}>
            <div>播放列表（{songList.length}）</div>
            <div className={`${styles['collect']}`}>
              {/* <span></span> */}
              <div>
                <i className={`${styles['col-bar']}`}></i> 收藏全部
              </div>
              <div>
                <i className={`${styles['clear-bar']}`}></i> 清除
              </div>
            </div>
          </div>
          <div className={`${styles['song-list-box']} ${styles['scroll']}`}>
            {listDom}
          </div>
        </div>
        <div className={`${styles['lyrics']}`}>
          <div className={`${styles['head']}`}> {songName} </div>
          <div
            className={`${styles['lyics-list']} ${styles['scroll']}`}
            id="lyics-list-warp"
          >
            {lyricsDom}
          </div>
        </div>
      </div>
    </div>
  );
};
