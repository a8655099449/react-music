import React from 'react';
import styles from './navBar.less';
import { history } from 'umi';
import { connect } from 'react-redux';
import event from '@/assets/js/event';

import { showModal } from '@/assets/js/tool';

import { Modal } from 'antd';
const { confirm } = Modal;
import { USER_DATA } from '@/config/localKey';

import { navList, userList } from './data';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLocalUserData();
  }
  state = {
    navList,
    activeIndex: 0,
  };
  handelNavChange = (item, activeIndex) => {
    this.setState({ activeIndex });
    history.push(item.path);
  };
  getLocalUserData() {
    // return console.log(this.props);
    let userData = localStorage.getItem(USER_DATA);
    if (!userData) return;
    userData = JSON.parse(userData);
    this.props.setUserData(userData.userData);

    // console.log(userData);
  }
  handleLoginClick() {
    event.emit('showLogin');
  }

  handleUserListCick(item) {
    // console.log(item);
    // ^ 退出登录
    if (item.tit === '退出') {
      showModal({
        title: '退出提示',
        content: '是否退出登录',
      }).then(() => {
        localStorage.setItem(USER_DATA, '');
        this.props.logout();
      });
    }
  }
  render() {
    console.log(this.props);

    let { isLogin, userInfo } = this.props;
    // console.log({isLogin,setUserData,userData});
    let navlistContent = this.state.navList.map((item, index) => {
      let className =
        index === this.state.activeIndex
          ? `${styles['list-item']} click ${styles['active']}`
          : styles['list-item'] + ' click';
      return (
        <div
          className={className}
          key={index}
          onClick={() => {
            this.handelNavChange(item, index);
          }}
        >
          {item.name}
        </div>
      );
    });

    // console.log(userInfo);

    let userDom;

    if (isLogin) {
      let { avatarUrl } = userInfo;
      userDom = (
        <div className={`${styles['user-data']}`}>
          <img src={avatarUrl} alt="头像" />

          <div className={`${styles['detail-list']}`}>
            {userList.map((item, index) => {
              let itemStyle = { backgroundPosition: item.postion };
              // console.log(itemStyle);
              return (
                <div
                  className={`${styles['list-item']}`}
                  key={index}
                  onClick={() => {
                    this.handleUserListCick(item);
                  }}
                >
                  <i className={`${styles['icon-bg']}`} style={itemStyle}></i>
                  {item.tit}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      userDom = (
        <div
          className={`${styles['login-bar']}`}
          onClick={this.handleLoginClick}
        >
          登录
        </div>
      );
    }

    return (
      <header className={styles['nav-bar']}>
        <div className={styles['content']}>
          <div className={styles['log-box']} href="/">
            <img src="//photo.tuituisoft.com/picgo/20210104113130.png" alt="" />
            不，是网抑云
          </div>
          <div className={styles['nav-list']}>{navlistContent}</div>
          <div className={`${styles['right-box']}`}>
            {/* 搜索框 */}
            <div className={`${styles['search-box']}`}>
              <i className={`iconfont icon-sousuo`}></i>
              <input type="input" placeholder="搜索框" />
            </div>
            {/* 创作者中心 */}
            <div className={`${styles['create-box']}`}>创作者中心</div>
            {/* 用户信息  */}
            <div className={`${styles['user']}`}>{userDom}</div>
          </div>
        </div>
      </header>
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
