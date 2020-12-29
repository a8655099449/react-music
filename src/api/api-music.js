/*
 * @Author: your name
 * @Date: 2020-12-21 17:56:36
 * @LastEditTime: 2020-12-22 10:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\api\api-music.js
 */

import request from './main';

/**
 * ^ 获取音乐的详情
 * @param {
 *  ids => 歌曲id
 * }
 */

export function getMusicDatail(params) {
  return request({
    url: '/song/detail',
    params,
  });
}
/**
 * ^ 获取音乐的url
 * @param {
 *  ids => 歌曲id
 * }
 */

export function getMusicUrl(params) {
  return request({
    url: '/song/url',
    params,
  });
}
