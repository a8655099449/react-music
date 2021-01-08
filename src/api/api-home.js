/*
 * @Author: your name
 * @Date: 2020-12-08 15:43:20
 * @LastEditTime: 2021-01-05 15:25:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-test\src\api\api-home.js
 */

import request from './main';

export function getHomeData() {
  return request({
    url: '/homepage/block/page',
    // iscookie: true,
  });
}
