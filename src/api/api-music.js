/*
 * @Author: your name
 * @Date: 2020-12-21 17:56:36
 * @LastEditTime: 2020-12-21 18:04:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\api\api-music.js
 */

import request from './main';

/**
 *
 * @param {
 *  ids => 歌曲id
 * }
 */

export function getMusicDatail(data) {
  return request({
    url: '/song/detail',
    data,
  });
}
