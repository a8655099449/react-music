import React from 'react';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';

import NotLogin from './components/NotLogin/NotLogin';
import styles from './Profile.less';

class Prfile extends React.Component {
  render() {
    let { userInfo, isLogin } = this.props;

    return (
      <div className={`${styles['classname']} page-content content-box`}>
        <NotLogin />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prfile);
