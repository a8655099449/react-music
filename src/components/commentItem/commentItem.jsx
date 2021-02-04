import React from 'react';
import styles from './commentItem.less';
import { formatTime } from '@/assets/js/tool';

export default props => {
  let { item } = props;
  let time = formatTime(new Date(item.time), 'yyyy年MM月dd日');
  let replyContent = null;
  // ^ 展示评论的回复
  if (item.beReplied && item.beReplied.length > 0) {
    replyContent = item.beReplied.map((item, index) => {
      return (
        <div className={`${styles['reply']}`} key={index}>
          <span className={`${styles['nick-name']} underline`}>
            {item.user.nickname}
          </span>{' '}
          ：{item.content}
        </div>
      );
    });
  }

  return (
    <div className={`${styles['comment-item']}`}>
      <div className={`${styles['avatar']}`}>
        <img
          src={item.user.avatarUrl + '?param=50y50'}
          alt={item.user.nickname}
        />
      </div>
      <div className={`${styles['comment-content']}`}>
        <div className={`${styles['top']}`}>
          <span className={`underline`}>{item.user.nickname}</span> :
          {item.content}
        </div>
        {replyContent}
        <div className={`${styles['bottom']}`}>
          <div className={`${styles['time']}`}>{time}</div>
          <div>
            <span className={`underline`}>
              <i className={`icon-dianzan iconfont`}></i> ({item.likedCount})
            </span>
            <span className={`${styles['center-line']}`}> |</span>
            <span className="underline">回复</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
