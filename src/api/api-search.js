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

/**
 * ^ 【 根据类型进行搜索 】
 * @param {
 *  keywords  => 关键字
 *  默认1
 *  type:  1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 * }
 */

export function searchForType(params) {
  return request({
    url: '/cloudsearch',
    params,
  });
}
