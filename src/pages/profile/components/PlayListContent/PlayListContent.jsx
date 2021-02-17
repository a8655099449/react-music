import React from 'react';
import styles from './PlayListContent.less';
import PlayListTable from '@/components/PlayListTable/PlayListTable';

import Detail from '../../../../components/playListDetail/Detail';
import Loading from '@/components/loading/Loading2';

export default props => {
  let { playListDetail } = props;
  if (!playListDetail) {
    return <Loading />;
  }

  return (
    <div className={`${styles['playlist-content']}`}>
      <Detail data={playListDetail} />
      <PlayListTable tracks={playListDetail.tracks} />
    </div>
  );
};
