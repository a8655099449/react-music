import React from 'react';
import styles from './BtnWarp.less';

export default props => {
  let { playList } = props;
  return (
    <div className={`${styles['btn-warp']} btn-gray`}>
      <div className={`${styles['btn-item']}`}>
        <i className="icon-pinglunzhuanhuan iconfont"></i>
        评论
      </div>
      <div className={`${styles['btn-item']}`} onClick={playList}>
        <i className="icon-bofang iconfont"></i>
        播放全部
      </div>
      <div className={`${styles['btn-item']}`}>
        <i className="icon-shoucang1 iconfont"></i>
        收藏
      </div>
    </div>
  );
};
