import React from 'react';
import styles from './navBar.less';
import { history } from 'umi';
import { connect } from 'react-redux';
import event from '@/assets/js/event';

import { showModal } from '@/assets/js/tool';

import { USER_DATA } from '@/config/localKey';
import NavBarUi from './navBarUi';

import { navList, userList } from './data';

import { userLogout, getUserLevel, getUserBindData } from '@/api/api-user';
import { searchMultiple } from '@/api/api-search';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLocalUserData();
  }
  state = {
    navList,
    activeIndex: 0,
    sideBarShow: false,
    searchKeywords: '',
  };
  handelNavChange = (item, activeIndex) => {
    if (item.name == '退出登录') {
      this.handleUserLogout();
      return;
    }
    if (history.location.pathname == item.path) {
      return this.setState({ sideBarShow: false });
    }
    this.setState({ activeIndex, sideBarShow: false });
    history.replace(item.path);
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
  handleChangeKeywords = e => {
    let searchKeywords = e.target.value;
    this.setState({ searchKeywords });
  };
  // ^ m端展示侧边栏
  handleShowSideBar = () => {
    let sideBarShow = !this.state.sideBarShow;
    this.setState({ sideBarShow });
  };
  // ^ web点击了用户菜单
  handleUserListCick = item => {
    if (item.tit === '退出') {
      return this.handleUserLogout();
    }
  };
  // ^ 瑞出登录
  handleUserLogout = () => {
    showModal({
      title: '退出提示',
      content: '是否退出登录',
    }).then(() => {
      localStorage.setItem(USER_DATA, '');
      this.props.logout();
      userLogout();
    });
  };
  // ^ 监听理由变化
  unlisten = history.listen((location, action) => {});
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
        handleChangeKeywords={this.handleChangeKeywords}
        goHome={this.goHome}
        navList={this.state.navList}
        activeIndex={this.state.activeIndex}
        sideBarShow={this.state.sideBarShow}
        isLogin={isLogin}
        userInfo={userInfo}
        searchKeywords={this.state.searchKeywords}
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
