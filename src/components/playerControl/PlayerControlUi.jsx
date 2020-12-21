import React from 'react';
import styles from './PlayerControl.less';

export default props => {
  let {
    handelCircleClick,
    handleCircleMouseDown,
    handleCirclemouseup,
    bar3Right,
  } = props;

  let bar3Style = {
    right: bar3Right + 'px',
  };

  return (
    <div className={`${styles['player-control']}`}>
      <div className={`${styles['content']} content-box`}>
        <div className={`${styles['control-box']}`}>
          <div
            className={`${styles['left']} click iconfont  icon-xiayishou`}
          ></div>
          <div
            className={`${styles['center']} click icon-ziyuan iconfont`}
          ></div>
          <div
            className={`${styles['right']}  click iconfont iconfont  icon-xiayishou`}
          ></div>
        </div>
        <div className={`${styles['music-box']}`}>
          <div className={`${styles['music-img']}`}>
            <img
              src="https://p2.music.126.net/GBtBf0Xg6Z5slxAW_V66Mw==/7779044766597685.jpg?param=34y34"
              alt=""
            />
          </div>
          <div className={`${styles['muisc-desc']}`}>
            <p className={`${styles['music-name']}`}>
              我是歌曲的名字
              <span>作者的名字</span>
            </p>

            <div className={`${styles['progrss-bar']}`}>
              <div className={`${styles['bar-1']} ${styles['bar-item']}`}></div>
              <div className={`${styles['bar-2']} ${styles['bar-item']}`}></div>
              <div
                className={`${styles['bar-3']} ${styles['bar-item']}`}
                style={bar3Style}
              >
                <div
                  className={`${styles['circle-bar']}`}
                  onClick={handelCircleClick}
                  onMouseDown={e => {
                    handleCircleMouseDown(e);
                  }}
                  onMouseUp={handleCirclemouseup}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
