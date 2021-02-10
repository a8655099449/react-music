import { history } from 'umi';

export const goSongPage = songId => {
  history.push({
    pathname: 'songDetail',
    query: { songId },
  });
};

/**
 * ^ 前往用户详情页
 * @param {*} id  用户id
 */
export const goUserDatail = id => {
  history.push({
    pathname: 'userDatail',
    query: { id },
  });
};
