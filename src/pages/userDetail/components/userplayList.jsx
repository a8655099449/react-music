import React, { useContext } from 'react';
import styles from '../userDatail.less';

import ListItem from '@/components/listItem/listItem.jsx';

export default props => {
  let { title = '默认标题', list } = props;
  return (
    <div className={`${styles['user-play-list']}`}>
      <header>
        {title} （{list.length}）
      </header>

      <div className={`${styles['list-wrap']}`}>
        {list.map((item, index) => (
          <div key={index} className={`${styles['list-item']}`}>
            <ListItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
