import React from 'react';
import styles from './navBar.less';

const seach = {
  songs: {
    title: '单曲',
  },
  artists: {
    title: '歌手',
  },
  albums: {
    title: '专辑',
  },
};

export default props => {
  let { WebSerachBar, handleChangeKeywords, searchKeywords } = props;

  return (
    <div className={`${styles['search-box']}`}>
      <input
        type="input"
        placeholder="搜索框"
        value={searchKeywords}
        onChange={handleChangeKeywords}
      />
      <i className={`iconfont icon-sousuo click`}></i>
      <div className={`${styles['serach-content']}`}>
        <div>搜索“{searchKeywords}”相关的用户</div>
        <div seach></div>
      </div>
    </div>
  );
};
