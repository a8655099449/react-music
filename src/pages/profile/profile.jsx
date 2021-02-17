import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './profile.less';

import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import { getUserSubcount, getUserPlaylist } from '@/api/api-user';
import { getSongListDetail } from '@/api/api-music';

import NotLogin from './components/NotLogin/NotLogin';
import SideBar from './components/sideBar/SideBar';
import PlayListContent from './components/PlayListContent/PlayListContent';
import MiniUi from './components/MiniUi/MiniUi';
import { PROFILE_PALYLIST_ID } from '@/config/localKey';
import Loading3 from '@/components/loading/Loading3';

const SelectType = [
  {
    name: 'mysinger',
    desc: '我的歌手',
  },
  {
    name: 'myVideo',
    desc: '我的视频',
  },
  {
    name: 'myPlaylist',
    desc: '创建的歌单',
  },
  {
    name: 'myCollectList',
    desc: '创建的歌单',
  },
];

const Profile = props => {
  let { userInfo, isLogin, isH5 } = props;

  if (!isLogin) {
    return (
      <div className={`page-content content-box`}>
        <NotLogin />
      </div>
    );
  }

  let uid = userInfo.userId;
  let [subcountData, setSubcount] = useState(null);
  let [userCreatePlaylist, setUserCreatePlaylist] = useState([]);
  let [userCollectPlaylist, setUserCollectPlaylist] = useState([]);
  let [sideSelectType, setSideSelectType] = useState(SelectType[2]['name']); // 默认选中歌单
  let [playListDetail, setplayListDetail] = useState(null); // 默认选中歌单

  const init = () => {
    _getUserSubcount();
    _getUserPlaylist();
  };
  // ^ 获取用户的关注数量
  const _getUserSubcount = async () => {
    let res = await getUserSubcount();
    if (res.code == 200) {
      setSubcount(res);
    }
  };
  // ^ 点击更换歌单
  const changePlayList = params => {
    if (params.id == playListDetail.id) return;
    _getSongListDetail(params.id);
  };
  // ^ 请求歌单
  const _getUserPlaylist = async () => {
    let res = await getUserPlaylist({ uid });
    if (res.code != 200) return;

    let userCreatePlaylist = res.playlist.filter(i => i.userId == uid);
    let userCollectPlaylist = res.playlist.filter(i => i.userId != uid);
    setUserCreatePlaylist(userCreatePlaylist);
    setUserCollectPlaylist(userCollectPlaylist);
    let id =
      localStorage.getItem(PROFILE_PALYLIST_ID) || userCreatePlaylist[0].id;
    _getSongListDetail(id);
  };
  // ^ 请求歌单详情
  const _getSongListDetail = async id => {
    localStorage.setItem(PROFILE_PALYLIST_ID, id);
    let listRes = await getSongListDetail({ id });

    if (listRes.code != 200) return;
    setplayListDetail(listRes.playlist);
  };
  let selectId = playListDetail ? playListDetail.id : 0;

  useEffect(() => {
    init();
  }, []);
  // ^ 如果是移动端 渲染移动端页面
  if (isH5) {
    return (
      <div className={`page-content content-box`}>
        <MiniUi
          userInfo={userInfo}
          userCollectPlaylist={userCollectPlaylist}
          userCreatePlaylist={userCreatePlaylist}
        />
      </div>
    );
  }

  let rightContent;
  switch (sideSelectType) {
    case SelectType[2]['name']:
      rightContent = <PlayListContent playListDetail={playListDetail} />;
      break;

    default:
      break;
  }
  return (
    <div className={`page-content content-box ${styles['wrap']}`}>
      <div className={`${styles['left-content']} public-scroll`}>
        <SideBar
          userCollectPlaylist={userCollectPlaylist}
          userCreatePlaylist={userCreatePlaylist}
          subcountData={subcountData}
          changePlayList={changePlayList}
          selectId={selectId}
        />
      </div>
      <div className={`${styles['right-content']} public-scroll`}>
        {rightContent}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
