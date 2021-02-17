import { history } from 'umi';

export const goSongPage = songId => {
  history.push({
    pathname: '/songDetail',
    query: { songId },
  });
};

/**
 * ^ 前往用户详情页
 * @param {*} id  用户id
 */
export const goUserDatail = id => {
  history.push({
    pathname: '/userDetail',
    query: { id },
  });
};

/**
 * ^ 前往专辑页面
 * @param {*} id  专辑id
 */
export const goAlbum = id => {
  history.push({
    pathname: '/album',
    query: { id },
  });
};
/**
 * ^ 前往歌手页面
 * @param {*} id  专辑id
 */
export const goSinger = id => {
  history.push({
    pathname: '/singer',
    query: { id },
  });
};

/**
 * ^ 前往mv页面
 * @param {*} id  专辑id
 */
export const goMv = id => {
  history.push({
    pathname: '/mv',
    query: { id },
  });
};
