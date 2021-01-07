import React from 'react';
import styles from './baseTitle.less';

export default props => {
  let { title = '默认标题' } = props;
  // let style = {};

  return (
    <div
      style={{
        borderBottom: '1px solid #cccccc',
        paddingBottom: '7px',
        fontWeight: '600',
        fontSize: '14px',
        color: '#000',
      }}
    >
      {title}
    </div>
  );
};
