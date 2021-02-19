import React from 'react';
import styles from './Comment.less';
import CommentItem from '@/components/commentItem/commentItem';
import BaseTitle from '@/components/baseTitle/baseTitle';
import CommentInp from '@/components/CommentInp/CommentInp';

export default props => {
  let { hotComments, commentCount, newComments, id } = props;

  return (
    <div>
      <CommentInp commentCount={commentCount} />

      {/* newComments */}
      <BaseTitle title="精彩评论" />
      {hotComments.map((item, index) => {
        return <CommentItem item={item} key={index} type={0} id={id} />;
      })}
      <div style={{ height: '10px' }}></div>
      <BaseTitle title="最新评论" />
      {newComments.map((item, index) => {
        return <CommentItem item={item} key={index} type={0} id={id} />;
      })}
    </div>
  );
};
