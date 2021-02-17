import React from 'react';
import styles from './songList.less';

import { parseSongTime } from '@/assets/js/tool';
let listHead = ['', '歌曲标题', '时长', '歌手', '专辑'];
import { history } from 'umi';
import PlayListTable from '../../../../components/PlayListTable/PlayListTable';

export default props => {
  let { tracks = [], playCount } = props;

  return (
    <div className={`${styles['song-list']}`}>
      <div className={`${styles['head']}`}>
        <div className={`${styles['left']}`}>
          歌曲列表 <span>{tracks.length}首歌</span>
        </div>
        <div className={`${styles['right']}`}>
          播放: <span>{playCount}</span> 次
        </div>
      </div>
      <PlayListTable tracks={tracks} />
    </div>
  );
};
