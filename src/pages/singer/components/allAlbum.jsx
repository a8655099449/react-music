import React, { useContext } from 'react';
import styles from '../singer.less';
import Context from '@/context';
import Loading from '@/components/loading/Loading2';
import AlbumItem from '../../../components/albumItem/AlbumItem';
const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

const allAlbum = props => {
  const { albums = [] } = useContext(Context);

  if (albums.length == 0) return loadContent;

  return (
    <div className={`${styles['flex-warp']}`}>
      {albums.map((item, index) => (
        <div className={`${styles['item']}`} key={index}>
          <AlbumItem item={item} showtime={true} />
        </div>
      ))}
    </div>
  );
};

export default allAlbum;
