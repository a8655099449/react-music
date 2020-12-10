import React from 'react';
import styles from './index.less';

export default () => {
  console.log(styles);
  
  return (
    <div>
      <h1 className={styles.title}>Page hehe</h1>
    </div>
  );
}
