/*
 * @Author: your name
 * @Date: 2020-12-08 15:43:20
 * @LastEditTime: 2021-01-04 08:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-test\src\api\api-home.js
 */

import request from './main';

export function getHomeData() {
  return request({
    url: '/homepage/block/page',
  });
}
