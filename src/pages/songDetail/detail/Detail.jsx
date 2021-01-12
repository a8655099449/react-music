import React from 'react';
import styles from './Detail.less';

export default props => {
  let { songData, commentCount, lrcMen, lrcArr, clickPlay } = props;
  if (!songData) {
    return <div>loading</div>;
  }
  let lrcMenDom;
  if (!lrcMen.nickname) {
    lrcMenDom = null;
  } else {
    lrcMenDom = (
      <div className={`${styles['gx-men']} `}>
        贡献歌词: <span className="underline">{lrcMen.nickname}</span>
      </div>
    );
  }
  return (
    <div className={`${styles['detail-content']}`}>
      <div className={`${styles['img-box']}`} title={songData.name}>
        <div className={`${styles['bg']}`}></div>
        <img
          src={songData.al.picUrl}
          alt={songData.name}
          className={`img-auto`}
        />
      </div>
      <div className={`${styles['desc-box']}`}>
        <div className={`${styles['name']}`}>
          <div className={`${styles['tag']}`}></div>
          <div className={`${styles['name-text']}`}>{songData.name}</div>
        </div>
        <div className={`${styles['singer']}`}>
          歌手 : <span className={`underline`}>{songData.singer.name}</span>
        </div>
        <div className={`${styles['singer']}`}>
          所属专辑 : <span className={`underline`}>{songData.al.name}</span>
        </div>

        <div className={`${styles['btn-box']}`}>
          <div
            className={`${styles['btn-item']} ${styles['play']} btn play`}
            onClick={clickPlay}
          >
            <i className={`iconfont icon-ziyuan`}></i> 播放
          </div>
          {/* 收藏 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-shoucang1`}></i> 收藏
          </div>
          {/* 转发 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-zhuanfafasong-3`}></i>分享
          </div>
          {/* 下载 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-xiazai`}></i> 下载
          </div>
          {/* 收藏 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-pinglunzhuanhuan`}></i> （
            {commentCount}）
          </div>
        </div>

        <div className={`${styles['geci']}`}>
          <ul className={`${styles['geci-list']} public-scrolll`}>
            {lrcArr.map((item, index) => {
              return <li key={index}> {item.content} </li>;
            })}
          </ul>
          {lrcMenDom}
        </div>
      </div>
    </div>
  );
};
