import React, { useContext } from 'react';
import styles from '../search.less';
import Context from '@/context';

import MvItem from '@/components/mvItem/MvItem.jsx';

export default props => {
  let { result } = useContext(Context);
  let list = [];
  if (result && result.mvs) {
    list = result.mvs;
  }
  return (
    <div className={`${styles['warp-5']}`}>
      {list.map((item, index) => (
        <div className={`${styles['item']}`} key={index}>
          <MvItem item={item} />
        </div>
      ))}
    </div>
  );
};
