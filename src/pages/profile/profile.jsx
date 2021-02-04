import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './profile.less';

import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import { getUserSubcount, getUserPlaylist } from '@/api/api-user';

import NotLogin from './components/NotLogin/NotLogin';
import SideBar from './components/sideBar/SideBar';

const SelectType = [
  {
    name: 'mysinger',
    desc: '我的歌手',
  },
  {
    name: 'myVideo',
    desc: '我的歌手',
  },
  {
    name: 'myPlaylist',
    desc: '我的歌手',
  },
  {
    name: 'mysinger',
    desc: '我的歌手',
  },
];

const Profile = props => {
  let { userInfo, isLogin } = props;
  // console.log(userInfo);

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
  let [sideSelectType, setSideSelectType] = useState(['']);

  const init = () => {
    _getUserSubcount();
    _getUserPlaylist();
  };

  const _getUserSubcount = async () => {
    let res = await getUserSubcount();
    if (res.code == 200) {
      setSubcount(res);
    }
  };
  const _getUserPlaylist = async () => {
    let res = await getUserPlaylist({ uid });
    // console.log(res);
    if (res.code == 200) {
      let userCreatePlaylist = res.playlist.filter(i => i.userId == uid);
      let userCollectPlaylist = res.playlist.filter(i => i.userId != uid);
      setUserCreatePlaylist(userCreatePlaylist);
      setUserCollectPlaylist(userCollectPlaylist);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={`page-content content-box ${styles['wrap']}`}>
      <div className={`${styles['left-content']} public-scroll`}>
        <SideBar />
      </div>
      <div className={`${styles['right-content']}`}>
        <SideBar />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
