/*
 * @Author: your name
 * @Date: 2020-12-21 17:56:36
 * @LastEditTime: 2021-01-07 21:54:20
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \react-umi\src\api\api-music.js
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
/**
 * ^ 获取音乐的歌词
 * @param {
 *  id => 歌曲id
 * }
 */

export function getMusicLyric(params) {
  return request({
    url: '/lyric',
    params,
  });
}

/**
 * ^ 获取歌单详情
 * @param {
 *  id => 歌单id
 * }
 */

export function getSongListDetail(params) {
  return request({
    url: '/playlist/detail',
    params,
    iscookie: true,
  });
}
/**
 * ^ 获取推荐歌单
 * @param {
 *  id => 歌单id
 * }
 */

export function getSongListRecommentByListId(params) {
  return request({
    url: '/related/playlist',
    params,
    iscookie: true,
  });
}
/**
 * ^ 获取【新碟上架】
 * @param {
 *  id => 歌单id
 * }
 */

export function getNewDVD(params) {
  return request({
    url: '/top/album',
    params,
    iscookie: true,
  });
}
