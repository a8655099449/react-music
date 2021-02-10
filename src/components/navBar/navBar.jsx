import React from 'react';
import styles from './navBar.less';
import { history } from 'umi';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';

import { showModal } from '@/assets/js/tool';

import { USER_DATA } from '@/config/localKey';
import NavBarUi from './navBarUi';

import { navList, userList } from './data';

import { showLogin, debounce } from '@/assets/js/tool';

import { getSeachMultimatch } from '@/api/api-seach';

import {
  userLogout,
  getUserLevel,
  getUserBindData,
  getUserLoginStatus,
} from '@/api/api-user';
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
    searchContent: null,
  };
  componentDidMount() {
    if (history.location.pathname == '/profile') {
      this.setState({
        activeIndex: 1,
      });
    }

    window.addEventListener('resize', this.listenResize);
    this.listenResize();
  }
  listenResize = debounce(() => {
    let width = window.innerWidth;
    if (width > 900) {
      this.props.setDevice(false);
    } else {
      this.props.setDevice(true);
    }
  }, 500);

  _getSeachMultimatch = debounce(async keywords => {
    keywords = keywords.trim();
    if (keywords.length <= 0) {
      this.setState({ searchContent: null });
      return;
    }
    let res = await getSeachMultimatch({ keywords });

    if (res.code == 200) {
      this.setState({ searchContent: res.result });
    }
    console.log(res);
  }, 500);

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
  getLocalUserData = async () => {
    let userData = localStorage.getItem(USER_DATA);
    if (!userData) return;

    userData = JSON.parse(userData);
    // ^ 获取用户登录状态
    let res = await getUserLoginStatus();
    if (res.code == 200) {
      let tokenJsonStr = JSON.parse(res.bindings[1].tokenJsonStr);
      // console.log(tokenJsonStr);
    }

    this.props.setUserData(userData.userData);
  };
  handleLoginClick() {
    showLogin();
  }
  handleChangeKeywords = e => {
    let searchKeywords = e.target.value;
    this.setState({ searchKeywords });
    this._getSeachMultimatch(searchKeywords);
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
    if (item.tit === '我的主页') {
      return history.push('/profile');
    }
  };
  // ^ 退出登录
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
  // unlisten = history.listen((location, action) => {
  //   console.log(location,action);
  // });
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
        searchContent={this.state.searchContent}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
