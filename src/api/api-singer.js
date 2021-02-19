import request from './main';

/**
 * ^ 获取歌手详情
 * @param
 * ? id 歌手id
 */

export const getSingerDetail = params => {
  return request({
    url: '/artist/detail',
    params,
    // iscookie: true,
  });
};
/**
 * ^ 获取歌手描述
 * @param
 * ? id 歌手id
 */

export const getSingerDesc = params => {
  return request({
    url: '/artist/desc',
    params,
    // iscookie: true,
  });
};

/**
 * ^ 获取歌手热门50首歌
 * @param
 * ? id 歌手id
 */

export const getSingerTopSong = params => {
  return request({
    url: '/artist/top/song',
    params,
    // iscookie: true,
  });
};

/**
 * ^ 获取歌手专辑
 * @param
 * ? id 歌手id
 */

export const getSingerAlbum = params => {
  return request({
    url: '/artist/album',
    params,
    // iscookie: true,
  });
};
/**
 * ^ 获取歌手Mv
 * @param
 * ? id 歌手id
 */

export const getSingerMv = params => {
  return request({
    url: '/artist/mv',
    params,
    // iscookie: true,
  });
};
