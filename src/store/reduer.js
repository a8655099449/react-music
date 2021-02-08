/*
 * @Author: your name
 * @Date: 2020-12-21 10:18:51
 * @LastEditTime: 2021-01-04 14:48:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\store\reduer.js
 */

const defaultState = {
  testData: {
    name: 'zhangsan',
    age: '19',
  },
  userData: null,
  isLogin: false,
  isH5: window.innerWidth > 900,
};

export default (state = defaultState, action) => {
  // console.log(action);
  // ^ 设置用户信息

  // ^ 退出登录

  switch (action.type) {
    case 'setUserInfo':
      state.userData = action.data;
      state.isLogin = true;
      break;

    case 'logout':
      state.userData = null;
      state.isLogin = false;
      break;
    case 'setDevice':
      state.isH5 = action.data;
      break;
  }

  return { ...state };
};
