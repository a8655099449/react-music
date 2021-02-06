import React from 'react';
import styles from './Loading.less';

export default () => {
  return (
    <div className={`${styles['loading-wrap']}`}>
      <div className={`${styles['loading3']}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>加载中...</p>
    </div>
  );
};
