import React, { useState } from 'react';
import styles from './SideBar.less';
import Image from '@/components/Image/Image';

export default () => {
  let [isShowCreate, setShowCreate] = useState(false);
  let [isShowCollect, setShowCollect] = useState(false);

  let createStyle = {
    display: isShowCreate ? 'block' : 'none',
  };
  let collectStyle = {
    display: isShowCollect ? 'block' : 'none',
  };
  let icon1cls = isShowCreate ? styles['isSelet'] : '';
  let icon2cls = isShowCollect ? styles['isSelet'] : '';

  return (
    <div className={`${styles['list-bar']}`}>
      <div className={`${styles['list-item']}`}>我的歌手（1）</div>
      <div className={`${styles['list-item']}`}>我的视频（1）</div>
      <div>
        <div
          className={`${styles['list-item']}`}
          onClick={() => setShowCreate(!isShowCreate)}
        >
          <i className={`${icon1cls} iconfont icon-you`}></i> 创建的歌单（1）
        </div>

        <div className={`${styles['children-list']}`} style={createStyle}>
          <PlayListItem />
          <PlayListItem />
          <PlayListItem />
          <PlayListItem />
          <PlayListItem />
        </div>
      </div>
      <div
        className={`${styles['list-item']}`}
        onClick={() => setShowCollect(!isShowCollect)}
      >
        <i className={`${icon2cls} iconfont icon-you`}></i> 收藏的歌单（1）
      </div>
      <div className={`${styles['children-list']}`} style={collectStyle}>
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </div>
    </div>
  );
};

const PlayListItem = params => {
  return (
    <div className={`${styles['playlist-item']} click`}>
      <div className={`${styles['img']} `}>
        <Image src="https://p2.music.126.net/Xn6gnUTYQPW4-fNAKRMz1A==/109951165461039930.jpg?param=40y40" />
      </div>
      <div className={`${styles['desc']}`}>
        <div className={`${styles['title']} text-row-1`}>
          我喜欢的音乐我喜欢的音乐我喜欢的音乐我喜欢的音乐
        </div>
        <div className={`${styles['count']}`}>100 首</div>
      </div>
    </div>
  );
};
