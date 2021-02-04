/*
 * @Author: your name
 * @Date: 2020-12-21 17:56:36
 * @LastEditTime: 2021-01-12 07:22:09
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
    url: '/album/newest',
    params,
    iscookie: true,
  });
}

/**
 * ^ 获取【歌曲评价】
 * @param {
 *  id => 歌单id
 * }
 */

export function getMusicComment(params) {
  return request({
    url: '/comment/music',
    params,
  });
}
/**
 * ^ 获取【根据歌曲id获得歌单推荐】
 * @param {
 *  id => 歌单id
 * }
 */

export function getPlayListForSongID(params) {
  return request({
    url: '/simi/playlist',
    params,
  });
}

/**
 * ^ 获取【获得相似歌曲】
 * @param {
 *  id => 歌单id
 * }
 */

export function getSimiSong(params) {
  return request({
    url: '/simi/song',
    params,
  });
}

/**
 * ^ 【 获得评论新版接口 】
 * @param {
 *  id => 资源 id, 如歌曲 id,mv id
 *  type => 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台
 *  pageNo => 分页参数 默认1
 *  pageSize => 大小
 *  sortType => 排序方式  1:按推荐排序,2:按热度排序,3:按时间排序
 * }
 *  ! type 0: 歌曲 1: mv  2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态
 */

export function getCommentNew(params) {
  return request({
    url: '/comment/new',
    params,
  });
}
