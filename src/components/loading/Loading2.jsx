import React from 'react';
import styles from './Loading.less';

export default props => {
  let { text = '加载中...' } = props;
  return (
    <div className={`${styles['loading-wrap']}`}>
      <div className={`${styles['loading3']}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>{text}</p>
    </div>
  );
};
