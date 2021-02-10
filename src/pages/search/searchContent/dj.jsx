import React, { useContext } from 'react';
import styles from '../search.less';
import Context from '@/context';
import { blodKeyword } from '@/assets/js/tool';

import DjItem from '@/components/djItem/djItem.jsx';

export default () => {
  let { result, keywords } = useContext(Context);
  let list = [];
  if (result && result.djRadios && Array.isArray(result.djRadios)) {
    list = result.djRadios;
  }

  return (
    <div className={`${styles['warp-5']}`}>
      {list.map((item, index) => {
        item.name = blodKeyword(keywords, item.name);

        return (
          <div className={`${styles['item']}`} key={index}>
            <DjItem item={item} />
          </div>
        );
      })}
    </div>
  );
};
