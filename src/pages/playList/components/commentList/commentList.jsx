import React from 'react';
import CommentItem from '../../../../components/commentItem/commentItem';

export default props => {
  let { list } = props;
  return (
    <div>
      {list.map((item, index) => (
        <CommentItem item={item} key={index} />
      ))}
    </div>
  );
};
