import React from 'react';
import CommentItem from '../../../../components/commentItem/commentItem';

export default props => {
  let { list, id } = props;
  return (
    <div>
      {list.map((item, index) => (
        <CommentItem item={item} key={index} type={2} id={id} />
      ))}
    </div>
  );
};
