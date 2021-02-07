import React from 'react';
import styles from './itemTitle.less';

export default props => {
  let { type = 0, title, icon = 'icon-changpian2' } = props;
  let typeCls = `type-${type}`;
  let rightContnet = null;
  if (props.children) {
    rightContnet = <div className={`click`}>{props.children}</div>;
  }

  return (
    <div className={`${styles['item-tit']} ${styles[typeCls]}`}>
      <div>
        <div className={`${styles['left-ui']}`}>
          <i className={`iconfont ${icon}`}></i>
          <div className={`${styles['title-text']} text-row-1`}>{title}</div>
        </div>
        {rightContnet}
      </div>
    </div>
  );
};

// export default ItemTitle;
