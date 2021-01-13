import React from 'react';
import styles from './navBar.less';
import { history } from 'umi';
import { connect } from 'react-redux';
import event from '@/assets/js/event';

import { showModal } from '@/assets/js/tool';

import { Modal } from 'antd';

import { USER_DATA } from '@/config/localKey';
import NavBarUi from './navBarUi';

import { navList, userList } from './data';

import { userLogout, getUserLevel, getUserBindData } from '@/api/api-user';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLocalUserData();
    // console.log(userLogout);
  }
  state = {
    navList,
    activeIndex: 0,
    sideBarShow: false,
  };
  handelNavChange = (item, activeIndex) => {
    this.setState({ activeIndex });
    history.push(item.path);
  };
  getLocalUserData = () => {
    let userData = localStorage.getItem(USER_DATA);
    if (!userData) return;
    userData = JSON.parse(userData);
    this.props.setUserData(userData.userData);
  };
  handleLoginClick() {
    event.emit('showLogin');
  }
  handleShowSideBar = () => {
    let sideBarShow = !this.state.sideBarShow;
    this.setState({ sideBarShow });
  };
  handleUserListCick = item => {
    // ^ 退出登录
    if (item.tit === '退出') {
      showModal({
        title: '退出提示',
        content: '是否退出登录',
      }).then(() => {
        localStorage.setItem(USER_DATA, '');
        this.props.logout();
        userLogout();
      });
    }
  };
  goHome = () => {
    history.push('/');
  };
  render() {
    let { isLogin, userInfo } = this.props;

    return (
      <NavBarUi
        handelNavChange={this.handelNavChange}
        handleLoginClick={this.handleLoginClick}
        handleUserListCick={this.handleUserListCick}
        handleShowSideBar={this.handleShowSideBar}
        goHome={this.goHome}
        navList={this.state.navList}
        activeIndex={this.state.activeIndex}
        sideBarShow={this.state.sideBarShow}
        isLogin={isLogin}
        userInfo={userInfo}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userData,
    isLogin: state.isLogin,
  };
}

function mapDispatchToProps(dispacth) {
  return {
    setUserData: data => {
      dispacth({
        type: 'setUserInfo',
        data,
      });
    },
    logout: () => {
      dispacth({
        type: 'logout',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
