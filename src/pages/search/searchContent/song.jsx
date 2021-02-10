import React, { useContext } from 'react';
// import styles from '../search';
import Context from '@/context';

import PlayListTable from '@/components/PlayListTable/PlayListTable.jsx';

export default () => {
  let { result } = useContext(Context);
  let list = [];
  if (result && result.songs) {
    list = result.songs;
  }

  return (
    <div>
      <PlayListTable tracks={list} showHead={false} />
    </div>
  );
};
