import React from 'react';
import styles from './PlayerControl.less';

export default props => {
  let { listShow, handleListShow, songList } = props;
  if (!songList) {
    songList = [1];
  }
  let listDom;
  if (songList.length === 0) {
    listDom = <div className={`${styles['not-song']}`}>你没有添加任何歌曲</div>;
  } else {
    listDom = (
      <ul className={`${styles['paly-song-list']}`}>
        <li>
          <div className={`${styles['arrow']}`}>
            <i></i>
          </div>
          <div className={`${styles['song-name']}`}>我是歌曲的名字</div>
          <div className={`${styles['handleList']}`}>
            <i className={`${styles['icon-1']}`}></i>
            <i className={`${styles['icon-2']}`}></i>
            <i className={`${styles['icon-3']}`}></i>
            <i className={`${styles['icon-4']}`}></i>
          </div>
          <div className={`${styles['singer-name']}`}>歌手姓名</div>
        </li>
      </ul>
    );
  }

  console.log(listShow);

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
            <div>播放列表（0）</div>
            <div className={`${styles['collect']}`}>
              {/* <span></span> */}
              <div>
                {' '}
                <i className={`${styles['col-bar']}`}></i> 收藏全部
              </div>
              <div>
                {' '}
                <i className={`${styles['clear-bar']}`}></i> 清除
              </div>
            </div>
          </div>
          <div className={`${styles['song-list-box']}`}>{listDom}</div>
        </div>
        <div className={`${styles['lyrics']}`}>
          <div className={`${styles['head']}`}></div>
        </div>
      </div>
    </div>
  );
};
