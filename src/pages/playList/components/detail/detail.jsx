import React from 'react';
import styles from './detail.less';
import { parsePlayCount } from '@/assets/js/tool';

export default props => {
  // console.log(props);
  let {
    isrequest,
    name,
    description,
    creator,
    coverImgUrl,
    tags,

    subscribedCount,
    shareCount,
    commentCount,
  } = props;
  if (!isrequest) {
    return <div>加载中....</div>;
  }
  description = description.split(/\n/);
  subscribedCount = parsePlayCount(subscribedCount);
  shareCount = parsePlayCount(shareCount);
  commentCount = parsePlayCount(commentCount);
  return (
    <div className={`${styles['detali']}`}>
      <div className={`${styles['img-box']}`}>
        <img src={coverImgUrl} title={name} />
      </div>
      <div className={`${styles['detali-text']}`}>
        <div className={`${styles['head']}`}>
          <div className={`${styles['tag']} ${styles['bg1']}`}></div>
          <div className={`${styles['list-name']}`}>{name}</div>
        </div>
        <div className={`${styles['creator']}`}>
          <div className={`${styles['avatar']}`}>
            <img src={creator.avatarUrl} alt="" title={creator.nickname} />
          </div>
          <span className={`${styles['creator-name']}`}>
            {creator.nickname}
          </span>
          <span>2019-06-05 创建</span>
        </div>

        <div className={`${styles['btn-box']}`}>
          {/* 播放 */}

          <div className={`${styles['btn-item']} ${styles['play']} btn play`}>
            <i className={`iconfont icon-ziyuan`}></i> 播放
          </div>
          {/* 收藏 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-shoucang1`}></i> （{subscribedCount}）
          </div>
          {/* 转发 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-zhuanfafasong-3`}></i>（{shareCount}）
          </div>
          {/* 下载 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-xiazai`}></i> （下载）
          </div>
          {/* 收藏 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-pinglunzhuanhuan`}></i> （
            {commentCount}）
          </div>
        </div>

        <div className={`${styles['tag-box']}`}>
          <div>标签:</div>
          {tags.map((item, index) => {
            return (
              <div className={`${styles['tag-item']} click`} key={index}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={`${styles['desc-box']}`}>
          <div>介绍:</div>
          <div className={`${styles['desc-content']} public-scrolll`}>
            <ul>
              {description.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
