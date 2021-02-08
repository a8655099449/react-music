import request from './main';

/**
 * ^ 搜索多重匹配
 * ! keywords  关键字  比传参数
 * @param {*} params
 */
export function getSeachMultimatch(params) {
  return request({
    url: '/search/suggest',
    params,
  });
}
