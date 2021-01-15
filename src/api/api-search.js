import request from './main';

/**
 * ^ 【 搜索多重匹配 】
 * @param {
 *  keywords  => 关键字
 * }
 */

export function searchMultiple(params) {
  return request({
    url: '/search/multimatch',
    params,
  });
}
