import React from 'react';
import styles from './recomment.less';
import BaseTitle from '@/components/baseTitle/baseTitle';

export default props => {
  let { recommentList = [] } = props;
  // console.log(recommentList);
  return (
    <div>
      <BaseTitle title="相关推荐" />
      <div className={`${styles['recomment-list']}`}>
        {recommentList.map((item, index) => {
          return (
            <div
              className={`${styles['recomment-item']}`}
              key={index}
              title={item.name}
            >
              <div className={`${styles['img']}`}>
                <img
                  className="auto-img"
                  src={item.coverImgUrl}
                  alt={item.name}
                  title={item.name}
                />
              </div>
              <div className={`${styles['desc']}`}>
                <div className={`${styles['name']} text-row-1 underline`}>
                  {item.name}
                </div>
                <div className={`${styles['creater']}  text-row-1`}>
                  by <span className="underline">{item.creator.nickname}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
