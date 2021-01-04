import React from 'react';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/footer';
import PlayerControl from '../components/playerControl/PlayerControl';
import Login from '../components/login/Login';

import styles from './index.less';

// 引入redux相关的内容

import { Provider } from 'react-redux';
import store from '../store';

function BasicLayout(props) {
  // console.log(props,NavBar);
  return (
    <div>
      <Provider store={store}>
        {/* 头部导航 */}
        <NavBar />
        <div className={`${styles['content']}`}>{props.children}</div>
        <Footer />
        <PlayerControl />
        <Login />
      </Provider>
    </div>
  );
}

export default BasicLayout;
