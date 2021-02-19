import React, { useState } from 'react';
import styles from './commentItem.less';
import { formatTime } from '@/assets/js/tool';
import Image from '@/components/Image/Image';
import { goUserDatail } from '../../assets/js/linkto';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import { showLogin, successMsg, warningMsg } from '../../assets/js/tool';
import { likeComments } from '../../api/api-comment';

const CommentItem = props => {
  let { item, isLogin, type = -1, id = -1 } = props;
  id = parseInt(id);
  const [liked, setliked] = useState(item.liked);
  const [likedCount, setlikedCount] = useState(item.likedCount);

  // ^ 点赞
  const _likeComment = async () => {
    if (!isLogin) return showLogin();
    if (type == -1 || id == -1) return;

    let t = liked ? 0 : 1;
    let prams = { type, id, cid: item.commentId, t };
    const res = await likeComments(prams);
    if (res.code === 200) {
      if (!liked) {
        successMsg('点赞成功');
        setlikedCount(likedCount + 1);
      } else {
        successMsg('取消点赞成功');
        setlikedCount(likedCount - 1);
      }
      setliked(!liked);
    }
  };
  let time = formatTime(new Date(item.time), 'yyyy年MM月dd日');
  if (item.commentId === 179938730) {
  }
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
      <div
        className={`${styles['avatar']}`}
        title={item.user.nickname}
        onClick={() => goUserDatail(item.user.userId)}
      >
        <Image
          src={item.user.avatarUrl + '?param=50y50'}
          alt={item.user.nickname}
        />
      </div>
      <div className={`${styles['comment-content']}`}>
        <div className={`${styles['top']}`}>
          <span
            className={`underline`}
            onClick={() => goUserDatail(item.user.userId)}
          >
            {item.user.nickname}
          </span>{' '}
          :{item.content}
        </div>
        {replyContent}
        <div className={`${styles['bottom']}`}>
          <div className={`${styles['time']}`}>{time}</div>
          <div>
            <span className={`underline`} onClick={_likeComment}>
              <i
                className={`icon-dianzan iconfont`}
                style={{
                  color: liked ? 'var(--main-color)' : 'var(--link-color)',
                }}
              ></i>{' '}
              ({likedCount})
            </span>
            <span className={`${styles['center-line']}`}> |</span>
            <span className="underline" onClick={() => warningMsg('敬请期待!')}>
              回复
            </span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
