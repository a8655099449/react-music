import request from './main';

/**
 * ! 【tpye】
 * ! 0: 歌曲
 * ! 1: mv
 * ! 2: 歌单
 * ! 3: 专辑
 * ! 4: 电台
 * ! 5: 视频
 * ! 6: 动态
 */

/**
 * ^ 给评论点赞
 * @param
 * ? id  资源id
 * ? t  1 为点赞 ,0 为取消点赞
 * ? cid 评论id
 * ? tpye 资源类型
 */

export const likeComments = params => {
  return request({
    url: '/comment/like',
    params,
    iscookie: true,
  });
};

/**
 * ^ 【 获得评论新版接口 】
 * @param {
 *  id => 资源 id, 如歌曲 id,mv id
 *  type => 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台
 *  pageNo => 分页参数 默认1
 *  pageSize => 大小
 *  sortType => 排序方式  1:按推荐排序,2:按热度排序,3:按时间排序
 * }
 */

export const getCommentNew = params => {
  return request({
    url: '/comment/new',
    params,
    iscookie: true,
  });
};
