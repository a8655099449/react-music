import React, { useContext } from 'react';
import styles from '../singer';
import Context from '@/context';
import PlayListTable from '../../../components/PlayListTable/PlayListTable';

import Loading from '@/components/loading/Loading2';
const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

const hot = props => {
  // let  {hot} = props
  const { hotsongs = [] } = useContext(Context);
  if (hotsongs === []) return loadContent;

  return (
    <div>
      <PlayListTable tracks={hotsongs} showHead={false} showSinger={false} />
    </div>
  );
};

export default hot;
