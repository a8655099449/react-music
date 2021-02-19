import request from './main';

/**
 * ^ 获取专辑详情
 * @param
 * ? id 专辑id
 */

export const getAlbumDetail = params => {
  return request({
    url: '/album',
    params,
  });
};
