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
    iscookie: true,
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
