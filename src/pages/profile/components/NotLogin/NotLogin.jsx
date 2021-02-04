import React from 'react';
import styles from './NotLogin.less';

import { showLogin } from '@/assets/js/tool';

export default () => {
  return (
    <div className={`${styles['not-login']}`}>
      <div className={`${styles['bg']}`} onClick={showLogin}></div>
    </div>
  );
};
