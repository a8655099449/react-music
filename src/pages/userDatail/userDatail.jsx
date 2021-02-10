import React, { useState, useEffect, useContext } from 'react';
import styles from './userDatail.less';
import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import { connect } from 'react-redux';

import Context from '@/context';
import Loading from '@/components/loading/Loading2';

import { getUserDetailData } from '@/api/api-user';

import Info from './components/Info';
import ListenTop from './components/listenTop';

const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

// import {history} from 'umi';

const userDatail = props => {
  let query = props.location.query;

  const { id = 488910132 } = query;

  const [userInfo, setUserInfo] = useState(null);
  // ^ 获取用户详情
  const _getUserDetailData = async uid => {
    const res = await getUserDetailData({ uid });
    if (res.code != 200) return;
    setUserInfo(res);
  };

  useEffect(() => {
    _getUserDetailData(id);
  }, []);

  const value = {
    id,
    userInfo,
  };

  if (!userInfo) {
    return loadContent;
  }

  // let { userDatail } = props;

  return (
    <div className={`${styles['user-detail']} content-box page-content`}>
      <Context.Provider value={value}>
        <Info />
        <ListenTop />
      </Context.Provider>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(userDatail);
