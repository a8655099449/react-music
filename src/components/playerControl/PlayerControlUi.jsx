import React from 'react';
import styles from './PlayerControl.less';
import PlayList from './PlayListUi';
import { showModal } from '@/assets/js/tool';

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
    handleClickLock,
    songData,
    isLock,
    listShow,
    songList,
    defaultWarpClick,
    deleteAllSongForList,
    showSetVolume,
    handleVolumeShow,
    handleChangeProvSong,
    handleChangeNextSong,
    handleSetVolumeEvent,
    playMode,
    changePlayMode,
    lrcArr,
    handleListShow,
    palyListSong,
    deleteOneSongForList,
    handleClickBar1,
    bar2Rigth,
  } = props;

  let bar3Style = {
    right: bar3Right + 'px',
  };
  let volumeStyle = {
    height: volumeHeight + 'px',
  };
  let setVolumeStyle = {
    display: showSetVolume ? 'block' : 'none',
  };
  let palyBtn, playModeDom;
  // 是否在播放的标记

  // & 设置播放模式

  if (playMode === 0) {
    playModeDom = (
      <div
        className={`${styles['schema-bar']} ${styles['bg-bar']}`}
        title="列表循环"
        onClick={changePlayMode}
      ></div>
    );
  } else if (playMode === 1) {
    playModeDom = (
      <div
        className={`${styles['schema-bar']} ${styles['once-bar']} ${styles['bg-bar']}`}
        title="单曲循环"
        onClick={changePlayMode}
      ></div>
    );
  } else {
    playModeDom = (
      <div
        className={`${styles['schema-bar']} ${styles['random-bar']} ${styles['bg-bar']}`}
        title="随机播放"
        onClick={changePlayMode}
      ></div>
    );
  }

  let lockClass = isLock ? styles['locked'] : styles['unlock'];
  let warpClass = isLock ? styles['warp-lock'] : styles['warp-unlock'];
  if (isplay) {
    palyBtn = (
      <div
        onClick={handleClickPaly}
        className={`${styles['center']} ${styles['bg-bar']} ${styles['pause']}`}
        style={{ fontSize: '32px' }}
        title="播放/暂停"
      ></div>
    );
  } else {
    palyBtn = (
      <div
        onClick={handleClickPaly}
        title="播放/暂停"
        className={`${styles['center']} ${styles['bg-bar']}`}
      ></div>
    );
  }

  return (
    <div
      className={`${styles['player-control']} ${warpClass} `}
      id="control-mian"
    >
      <div className={`${styles['bg']} ${styles['bg-bar']}`}></div>
      <div
        className={`${styles['lock-warp']} ${lockClass} ${styles['bg-bar']}`}
        onClick={handleClickLock}
      >
        <div className={`${styles['lock-bar']} ${styles['bg-bar']}`}></div>
      </div>

      <div className={`${styles['content']} content-box`}>
        <PlayList
          listShow={listShow}
          handleListShow={handleListShow}
          palyListSong={palyListSong}
          deleteOneSongForList={deleteOneSongForList}
          deleteAllSongForList={deleteAllSongForList}
          songList={songList}
          lrcArr={lrcArr}
          songName={songData.songName}
        />
        <audio src={songUrl} id="music-player"></audio>
        <div className={`${styles['control-box']}`}>
          <div
            className={`${styles['left']}  ${styles['bg-bar']}`}
            title="上一首"
            onClick={handleChangeProvSong}
          ></div>
          {palyBtn}
          <div
            className={`${styles['right']} ${styles['bg-bar']}`}
            onClick={handleChangeNextSong}
            title="下一首"
          ></div>
        </div>
        <div className={`${styles['music-box']}`}>
          <div className={`${styles['music-img']}`}>
            <img src={songData.songPic} alt="" />
          </div>
          <div className={`${styles['muisc-desc']}`}>
            <p className={`${styles['music-name']} text-row-1`}>
              {songData.songName}
              <span>{songData.singerName}</span>
            </p>

            <div
              className={`${styles['progrss-bar']}`}
              id="progrss-bar"
              onClick={handleClickBar1}
            >
              <div className={`${styles['bar-1']} ${styles['bar-item']}`}></div>
              <div
                className={`${styles['bar-2']} ${styles['bar-item']}`}
                style={{ right: `${bar2Rigth}px` }}
              ></div>
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
          <div
            className={`${styles['volume-bar']} ${styles['bg-bar']}`}
            onClick={handleVolumeShow}
          ></div>
          {playModeDom}
          <div
            className={`${styles['menu-bar']} ${styles['bg-bar']}`}
            onClick={handleListShow}
          >
            <span>{songList.length}</span>
          </div>

          {/* 设置音量的条 */}
          <div
            className={`${styles['volume-setbar']} volume-setbar-index`}
            style={setVolumeStyle}
          >
            <div
              className={`${styles['bg']} ${styles['bg-bar']} volume-setbar-index`}
            ></div>
            <div
              className={`${styles['prop-bar']} ${styles['bg-bar']} volume-setbar-index`}
              style={volumeStyle}
            >
              <span
                className={`${styles['volume-circle']}  volume-setbar-index`}
                onMouseDown={handleSetVolumeEvent.mousedownCircle}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
