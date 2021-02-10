import React, { useContext } from 'react';
import styles from '../search.less';
import Context from '@/context';
import LyricsItem from '@/components/lyricsItem/LyricsItem.jsx';

export default props => {
  let { result } = useContext(Context);
  let list = [];
  if (result && result.songs) {
    list = result.songs;
  }
  return (
    <div className={`${styles['lyrics']}`}>
      {list.map((item, index) => (
        <div key={item.id}>
          <LyricsItem item={item} />
        </div>
      ))}
    </div>
  );
};
