import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';

import styles from './mv.less';
import Context from '@/context';

const mv = props => {
  // let { userInfo, isLogin } = props;
  // console.log(userInfo, isLogin );
  let query = props.location.query;
  let id = 488910132;
  if (query.id && !isNaN(query.id)) id = parseInt(query.id);

  const value = { id };

  return (
    <div className={`${styles['classname']} content-box page-content`}>
      {id}
      <Context.Provider value={value}></Context.Provider>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(mv);
