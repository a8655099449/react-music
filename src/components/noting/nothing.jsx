import React, { useContext } from 'react';
import styles from './nothing.less';
// import Context from '@/context';
import Image from '@/components/Image/Image';

export default props => {
  let { hintText } = props;

  return (
    <div className={`${styles['nothing']}`}>
      <Image src="//image.woai996.com/picGo/20210210092240.png" />
      <h3 dangerouslySetInnerHTML={{ __html: hintText }}></h3>
    </div>
  );
};
