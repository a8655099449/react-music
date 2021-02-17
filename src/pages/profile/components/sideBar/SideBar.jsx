import React, { useState, useEffect } from 'react';
import styles from './SideBar.less';
import Image from '@/components/Image/Image';

const defaultsubcountData = {
  artistCount: 0,
  createDjRadioCount: 0,
  createdPlaylistCount: 0,
  djRadioCount: 0,
  mvCount: 0,
  newProgramCount: 0,
  programCount: 0,
  subPlaylistCount: 0,
};

export default props => {
  let [isShowCreate, setShowCreate] = useState(false);
  let [isShowCollect, setShowCollect] = useState(false);
  let {
    userCreatePlaylist = [],
    userCollectPlaylist = [],
    subcountData,
    changePlayList,
    selectId,
  } = props;
  if (!subcountData) subcountData = defaultsubcountData;
  let createStyle = {
    display: isShowCreate ? 'block' : 'none',
  };
  let collectStyle = {
    display: isShowCollect ? 'block' : 'none',
  };
  let icon1cls = isShowCreate ? styles['isSelet'] : '';
  let icon2cls = isShowCollect ? styles['isSelet'] : '';

  useEffect(() => {
    if (userCreatePlaylist.find(item => item.id === selectId)) {
      setShowCreate(true);
    }
    if (userCollectPlaylist.find(item => item.id === selectId)) {
      setShowCollect(true);
    }
  }, [selectId]);

  return (
    <div className={`${styles['list-bar']}`}>
      <div className={`${styles['list-item']}`}>
        我的歌手（{subcountData.artistCount}）
      </div>
      <div className={`${styles['list-item']}`}>
        我的视频（{subcountData.subPlaylistCount}）
      </div>
      <div>
        <div
          className={`${styles['list-item']}`}
          onClick={() => setShowCreate(!isShowCreate)}
        >
          <i className={`${icon1cls} iconfont icon-you`}></i> 创建的歌单（
          {subcountData.createdPlaylistCount}）
        </div>

        <div className={`${styles['children-list']}`} style={createStyle}>
          {userCreatePlaylist.map((item, index) => {
            return (
              <PlayListItem
                key={index}
                item={item}
                changePlayList={changePlayList}
                selectId={selectId}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`${styles['list-item']}`}
        onClick={() => setShowCollect(!isShowCollect)}
      >
        <i className={`${icon2cls} iconfont icon-you`}></i> 收藏的歌单（
        {subcountData.subPlaylistCount}）
      </div>
      <div className={`${styles['children-list']}`} style={collectStyle}>
        {userCollectPlaylist.map((item, index) => {
          return (
            <PlayListItem
              key={index}
              item={item}
              changePlayList={changePlayList}
              selectId={selectId}
            />
          );
        })}
      </div>
    </div>
  );
};

const PlayListItem = props => {
  let { item, changePlayList, selectId } = props;
  let className = '';
  if (selectId == item.id) {
    className = styles['active'];
  }

  return (
    <div
      className={`${styles['playlist-item']} click ${className}`}
      onClick={() => changePlayList(item)}
    >
      <div className={`${styles['img']} `}>
        <Image src={`${item.coverImgUrl}?param=40y40`} />
      </div>
      <div className={`${styles['desc']}`}>
        <div className={`${styles['title']} text-row-1`}>{item.name}</div>
        <div className={`${styles['count']}`}>{item.trackCount} 首</div>
      </div>
    </div>
  );
};
