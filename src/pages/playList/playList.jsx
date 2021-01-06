// ! 歌单详情页面

import React from 'react';

import styles from './playList.less';
import { getSongListDetail } from '@/api/api-music';

class playList extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  // ^ 获取歌单详情
  _getSongListDetail = async () => {
    let res = await getSongListDetail();
  };

  render() {
    return (
      <div className={`${styles['content']} content-box page-content`}>
        我是歌单详情
      </div>
    );
  }
}

export default playList;
