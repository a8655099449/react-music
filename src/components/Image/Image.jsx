import React, { useState } from 'react';
import styles from './Image.less';

export default props => {
  let { src, alt = '图片描述', height, width } = props;

  let [isload, setLoad] = useState(false);
  let defaultUrl = '//photo.tuituisoft.com/picgo/20210114103900.png';
  let style = {
    height,
    width,
    display: isload ? 'block' : 'none',
  };
  let defaultStyle = {
    height,
    width,
    display: !isload ? 'block' : 'none',
  };
  function handleImageLoad() {
    setLoad(true);
  }

  return (
    <React.Fragment>
      <img
        src={defaultUrl}
        alt="占位图片"
        style={defaultStyle}
        className={`${styles['base-image']}`}
      />
      <img
        src={src}
        alt={alt}
        style={style}
        className={`${styles['base-image']}`}
        onLoad={handleImageLoad}
      />
    </React.Fragment>
  );

  // 占位图
  // & '//photo.tuituisoft.com/picgo/20210114100457.png'
};
