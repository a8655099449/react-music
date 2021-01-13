import React from 'react';
import styles from './MiniSearchBar.less';

export default () => {
  return (
    <div className={`${styles['search-bar']}`}>
      <div className={`${styles['inp-box']}`}>
        <div className={`iconfont icon-sousuo1 ${styles['icon']}`}></div>
        <input type="text" placeholder="请输入搜索内容" />
      </div>
    </div>
  );
};
