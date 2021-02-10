import React, { useState, useEffect, useContext } from 'react';
import styles from './userDatail.less';
import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import { connect } from 'react-redux';
import Context from '@/context';

import moduleName from '@/api/api-user';

import Info from './components/Info';

// import {history} from 'umi';

const userDatail = props => {
  let query = props.location.query;
  const { id = 488910132 } = query;
  const getUserDeatail = id => {};

  useEffect(() => {}, []);

  const value = {
    id,
  };

  // let { userDatail } = props;

  return (
    <div className={`${styles['user-detail']} content-box page-content`}>
      <Context.Provider value={value}>
        <Info />
      </Context.Provider>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(userDatail);
