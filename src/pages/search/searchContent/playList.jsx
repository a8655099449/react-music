import React, { useContext } from 'react';
import styles from '../search.less';
import Context from '@/context';
import ListItem from '@/components/listItem/listItem.jsx';

import { blodKeyword } from '@/assets/js/tool';

export default () => {
  let { result, keywords } = useContext(Context);
  let list = [];
  if (result && result.playlists && Array.isArray(result.playlists)) {
    list = result.playlists;
  }

  return (
    <div className={`${styles['warp-5']}`}>
      {list.map((item, index) => {
        item.name = blodKeyword(keywords, item.name);
        return (
          <div className={`${styles['item']}`} key={index}>
            <ListItem item={item} />
          </div>
        );
      })}
    </div>
  );
};
