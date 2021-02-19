import React from 'react';
import styles from './Detail.less';
import { parsePlayCount, formatTime, addPlayList } from '@/assets/js/tool';
import Image from '@/components/Image/Image';
import { goUserDatail } from '../../assets/js/linkto';

const playList = params => {
  let list = params.map(item => {
    return {
      songName: item.name,
      singerName: item.ar[0].name,
      songId: item.id,
      dt: item.dt,
    };
  });
  addPlayList(list);
};

export default props => {
  let { data } = props;
  if (!data) {
    return <div>加载中....</div>;
  }

  let {
    description,
    subscribedCount,
    commentCount,
    name,
    shareCount,
    creator,
    tags = [],
    createTime,
    // playList = [],
  } = data;
  if (!creator) {
    return null;
  }

  createTime = formatTime(createTime, 'yyyy-MM-dd');
  description = description ? description.split(/\n/) : [];
  subscribedCount = parsePlayCount(subscribedCount);
  shareCount = parsePlayCount(shareCount);
  commentCount = parsePlayCount(commentCount);
  return (
    <div className={`${styles['detali']}`}>
      <div className={`${styles['img-box']}`}>
        {/* <img src={coverImgUrl} title={name} /> */}
        <Image src={data.coverImgUrl + '?param=200y200'} />
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
          <span
            className={`${styles['creator-name']} underline`}
            onClick={() => goUserDatail(creator.userId)}
          >
            {creator.nickname}
          </span>
          <span className={`${styles['creator-time']}`}>{createTime} 创建</span>
        </div>

        <div className={`${styles['btn-box']}`}>
          {/* 播放 */}

          <div
            className={`${styles['btn-item']} ${styles['play']} btn play`}
            onClick={() => {
              playList(data.tracks);
            }}
          >
            <i className={`iconfont icon-ziyuan`}></i> 播放
          </div>
          {/* 收藏 */}
          <div className={`${styles['btn-item']} btn`}>
            <i className={`iconfont icon-shoucang1`}></i> （{subscribedCount}）
          </div>
          {/* 转发 */}
          {/* 9 */}
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
        <Tags tags={tags} />
        <Desc description={description} />
        <div className={`${styles['mini-desc']} text-row-2`}>
          {description.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

const Desc = props => {
  let description = { props };
  let content;

  if (description.length > 0) {
    content = (
      <ul>
        {description.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  } else {
    content = <span>暂无描述</span>;
  }

  return (
    <div className={`${styles['desc-box']}`}>
      <div>介绍:</div>
      <div className={`${styles['desc-content']} public-scroll`}>{content}</div>
    </div>
  );
};

const Tags = props => {
  let { tags = [] } = props;
  if (tags.length == 0) {
    return null;
  }

  return (
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
  );
};
