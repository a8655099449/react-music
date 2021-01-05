import React from 'react';
import styles from './Login.less';
import { message } from 'antd';

import { userLogin, getUserLevel } from '../../api/api-user';

import event from '@/assets/js/event';

import { connect } from 'react-redux';

import { USER_DATA, COOKIE } from '@/config/localKey';

import { disbledBodyScroll, bodyScroll } from '@/assets/js/tool';

class Login extends React.Component {
  state = {
    acc: '',
    pwd: '',
    isSHow: false,
  };
  constructor(props) {
    super(props);
    event.on('showLogin', this.showLogin);
    // console.log(event);
  }
  showLogin = () => {
    disbledBodyScroll();
    this.setState({
      isSHow: true,
    });
  };
  changeInp = e => {
    // console.log(e.target.id);
    if (e.target.id === 'login-acc') {
      this.setState({
        acc: e.target.value,
      });
    } else {
      this.setState({
        pwd: e.target.value,
      });
    }
  };
  handleLogin = async () => {
    event.emit('showLoading');
    // console.log();
    let { acc, pwd } = this.state;
    let time = Date.parse(new Date()) / 1000;
    try {
      let res = await userLogin({
        phone: acc,
        password: pwd,
        time,
      });

      if (res && res.code === 200) {
        // let level = await getUserLevel()
        // console.log(level);
        // return
        let userData = res.profile;

        localStorage.setItem(COOKIE, res.cookie);
        let level = await getUserLevel();
        // console.log(level);
        if (level.code === 200) {
          userData.level = level.data;
        }
        localStorage.setItem(
          USER_DATA,
          JSON.stringify({
            userData,
            time,
          }),
        );
        this.props.setUserData(userData);
        setTimeout(() => {
          this.closeBar();
        }, 500);
        event.emit('hideLoading');
        message.success('登录成功');
        return;
      }
      event.emit('hideLoading');
      message.error('账号或密码错误');
    } catch (error) {
      // console.log(error, '错误信息');
      event.emit('hideLoading');
      message.error('账号或密码错误');
      return;
    }
  };
  closeBar = () => {
    bodyScroll();
    this.setState({
      isSHow: false,
    });
  };
  async getUserLevel(userData) {
    try {
      console.log(level);
    } catch (error) {
      console.dir(error);
      message.error('获取等级失败了');
    }
  }

  render() {
    // console.log(this.props);
    if (!this.state.isSHow) {
      return null;
    }

    return (
      <div className={`${styles['login']}`}>
        <div className={`${styles['warp']}`}>
          <div className={`${styles['head']}`}>
            <span>登录</span>
            <i
              className={`${styles['close']} icon-guanbi iconfont click`}
              onClick={this.closeBar}
            ></i>
          </div>
          <div className={`${styles['from-box']}`}>
            <p className={`${styles['from-item']}`}>
              <input
                type="text"
                name=""
                id="login-acc"
                placeholder="请输入手机号"
                value={this.state.acc}
                onChange={this.changeInp}
              />
            </p>
            <p className={`${styles['from-item']}`}>
              <input
                type="password"
                name=""
                id="login-pwd"
                placeholder="请输入密码"
                value={this.state.pwd}
                onChange={this.changeInp}
              />
            </p>
            <div>
              <div>
                {/* <input type="text"/> */}
                自动登录
              </div>
            </div>
            <button
              className={`${styles['login-btn']} btn`}
              onClick={this.handleLogin}
            >
              登录
            </button>
          </div>
        </div>
      </div>
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
  };
}

// export default connect(mapStateToProps,mapDispatchToProps)(Login)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
