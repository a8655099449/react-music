import React, { useState, useEffect, useContext } from 'react';
import styles from './userDatail.less';

import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import { connect } from 'react-redux';

import Context from '@/context';
import Loading from '@/components/loading/Loading2';

import { getUserDetailData, getUserPlaylist } from '@/api/api-user';

import Info from './components/Info';
import ListenTop from './components/listenTop';
import UserplayList from './components/userplayList';
import { scrollTopTo } from '../../assets/js/tool';

const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

// import {history} from 'umi';

const userDatail = props => {
  let query = props.location.query;
  let id = 488910132;
  if (query.id && !isNaN(query.id)) id = parseInt(query.id);

  const [userInfo, setUserInfo] = useState(null);

  const [createList, setCreateList] = useState([]);
  const [collectList, setCollectList] = useState([]);

  // ^ 获取用户详情
  const _getUserDetailData = async uid => {
    const res = await getUserDetailData({ uid });
    if (res.code != 200) return;

    document.title = `${res.profile.nickname} - 用户`;

    setUserInfo(res);
  };

  // ^ 获得用户的歌单
  const _getUserPlayList = async () => {
    let res = await getUserPlaylist({ uid: id });

    if (res.code !== 200) return;
    let crl = [];
    let collectList = [];

    res.playlist.forEach(item => {
      if (item.userId == id) {
        crl.push(item);
      } else {
        collectList.push(item);
      }
    });
    setCreateList(crl);
    setCollectList(collectList);
  };

  useEffect(() => {
    _getUserDetailData(id);
    _getUserPlayList();
    scrollTopTo(0);
  }, []);

  const value = {
    id,
    userInfo,
    collectList,
    createList,
  };

  if (!userInfo) {
    return loadContent;
  }

  return (
    <div className={`${styles['user-detail']} content-box page-content`}>
      <Context.Provider value={value}>
        <Info />
        <ListenTop />
        <UserplayList
          title={`${userInfo.profile.nickname}创建的歌单`}
          list={createList}
        />
        <UserplayList
          title={`${userInfo.profile.nickname}收藏的歌单`}
          list={collectList}
        />
      </Context.Provider>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(userDatail);
