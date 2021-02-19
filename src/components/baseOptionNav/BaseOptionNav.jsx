import React from 'react';
import styles from './BaseOptionNav.less';

const BaseOptionNav = props => {
  let { list = [], activeIndex = 0, changeNav } = props;
  return (
    <div className={`${styles['base-option-nav']}`}>
      {list.map((item, index) => (
        <div
          item={item}
          key={index}
          className={activeIndex === index ? styles['active'] : ''}
          onClick={() => {
            if (index == activeIndex) return;
            changeNav(index);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default BaseOptionNav;
