import React from 'react';
import styles from './PlayerControl.less';

export default props => {
  let {
    handelCircleClick,
    handleCircleMouseDown,
    handleCirclemouseup,
    bar3Right,
    volumeHeight,
    songUrl,
    handleClickPaly,
    isplay,
    songTime,
    songData,
    handleSetVolumeEvent,
  } = props;

  // console.log(handleSetVolumeEvent.mousedownCircle);

  // let songDom = ()
  let bar3Style = {
    right: bar3Right + 'px',
  };
  let volumeStyle = {
    height: volumeHeight + 'px',
  };
  let palyBtn;
  // 是否在播放的标记
  if (isplay) {
    palyBtn = (
      <div
        onClick={handleClickPaly}
        className={`${styles['center']} ${styles['bg-bar']} ${styles['pause']}`}
        style={{ fontSize: '32px' }}
      ></div>
    );
  } else {
    palyBtn = (
      <div
        onClick={handleClickPaly}
        className={`${styles['center']} ${styles['bg-bar']}`}
      ></div>
    );
  }
  // console.log(palyBtn.props.className);
  return (
    <div className={`${styles['player-control']}`}>
      <div className={`${styles['content']} content-box`}>
        <audio src={songUrl} id="music-player"></audio>
        <div className={`${styles['control-box']}`}>
          <div
            className={`${styles['left']} click iconfont  icon-xiayishou`}
          ></div>
          {palyBtn}
          <div
            className={`${styles['right']}  click iconfont iconfont  icon-xiayishou`}
          ></div>
        </div>
        <div className={`${styles['music-box']}`}>
          <div className={`${styles['music-img']}`}>
            <img src={songData.songPic} alt="" />
          </div>
          <div className={`${styles['muisc-desc']}`}>
            <p className={`${styles['music-name']}`}>
              {songData.songName}
              <span>{songData.singerName}</span>
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
          {/* 播放时间统计 */}
          <div className={`${styles['muisc-time-box']}`}>
            <span>{songTime.nowTime}</span>
            <span>/{songTime.maxTime}</span>
          </div>
        </div>

        {/* 收藏/转发 */}
        <div className={`${styles['collect-box']}`}>
          <div className={`${styles['collect-bar']} ${styles['bg-bar']}`}></div>
          <div className={`${styles['share-bar']} ${styles['bg-bar']}`}></div>
        </div>
        {/* 音量/播放模式/列表 */}
        <div className={`${styles['volume-warp']}`}>
          <div className={`${styles['volume-bar']} ${styles['bg-bar']}`}></div>
          <div className={`${styles['schema-bar']} ${styles['bg-bar']}`}></div>
          <div className={`${styles['menu-bar']} ${styles['bg-bar']}`}>1</div>

          {/* 设置音量的条 */}
          <div className={`${styles['volume-setbar']}`}>
            <div className={`${styles['bg']} ${styles['bg-bar']}`}></div>
            <div
              className={`${styles['prop-bar']} ${styles['bg-bar']}`}
              style={volumeStyle}
            >
              <span
                className={`${styles['volume-circle']} `}
                onMouseDown={handleSetVolumeEvent.mousedownCircle}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};