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
// ^ 获取用户详情信息

// export function getUserBindData(data) {
//   // console.log(data);
//   return request({
//     url: `/user/binding`,
//     params: data,
//     iscookie: true,
//   });
// }

// ^ 获取用户登录状态
// ! uid => 用户id
export function getUserLoginStatus() {
  // console.log(data);
  return request({
    url: `/login/status`,
    iscookie: true,
  });
}

// ^ 获取用户详情

export function getUserDetailData(data) {
  return request({
    url: `/user/detail`,
    params: data,
    iscookie: true,
  });
}

// ^ 获取用户信息 , 歌单，收藏，mv, dj 数量

export function getUserSubcount() {
  return request({
    url: `/user/subcount`,
    iscookie: true,
  });
}

/**
 * ^ 获取用户歌单
 * @param {*} data uid 用户id
 */

export function getUserPlaylist(data) {
  return request({
    url: `/user/playlist`,
    iscookie: true,
    params: data,
  });
}

/**
 * ^ 获取用户的听歌记录
 * @param
 * ? uid => 用户id
 * ? type  => 0 全部  1 最近一周 ; 默认0
 */

export function getUserListenHistory(data) {
  return request({
    url: `/user/record`,
    iscookie: true,
    params: data,
  });
}
