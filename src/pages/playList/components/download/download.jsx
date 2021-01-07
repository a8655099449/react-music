import React from 'react';
import BaseTitle from '@/components/baseTitle/baseTitle';
import styles from './download.less';
export default () => {
  return (
    <a href="https://music.163.com/#/download" target="block">
      <BaseTitle title="网易云音乐多端下载" />

      <div className={`${styles['load-list']}`}></div>
      <p className={`${styles['load-text']}`}>同步歌单，随时畅听320k好音乐</p>
    </a>
  );
};
