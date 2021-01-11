/*
 * @Author: your name
 * @Date: 2021-01-04 08:54:00
 * @LastEditTime: 2021-01-11 21:03:53
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \react-umi\src\api\api-user.js
 */
import request from './main';

// ^ 用户登录
export function userLogin(data) {
  return request({
    url: '/login/cellphone?time=' + data.time,
    method: 'post',
    data,
  });
}

// ^ 获取用户等级
export function getUserLevel() {
  let time = Date.parse(new Date()) / 1000;
  return request({
    url: `/user/level?time=${time}`,
    iscookie: true,
  });
}

// ^ 退出登录

export function userLogout() {
  return request({
    url: '/logout',
  });
}

// ^ 获取用户绑定信息

export function getUserBindData(data) {
  // console.log(data);
  return request({
    url: `/user/binding`,
    params: data,
    iscookie: true,
  });
}
