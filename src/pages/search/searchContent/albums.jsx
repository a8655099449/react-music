import React, { useContext } from 'react';
import styles from '../search.less';
import Context from '@/context';
import AlbumItem from '@/components/albumItem/AlbumItem.jsx';

export default props => {
  let { result } = useContext(Context);
  let list = [];
  if (result && result.albums) {
    list = result.albums;
  }
  return (
    <div className={`${styles['warp-5']}`}>
      {list.map((item, index) => (
        <div className={`${styles['item']}`} key={index}>
          <AlbumItem item={item} width={160} />
        </div>
      ))}
    </div>
  );
};
