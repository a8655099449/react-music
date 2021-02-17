import React from 'react';
import styles from './recomment.less';
import BaseTitle from '@/components/baseTitle/baseTitle';

import Image from '@/components/Image/Image';

import { goUserDatail } from '@/assets/js/linkto';

export default props => {
  let { recommentList = [], changeList } = props;
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
                <Image
                  className="auto-img"
                  src={`${item.coverImgUrl}?param=40y40`}
                  alt={item.name}
                  onClick={() => {
                    changeList(item);
                  }}
                />
              </div>
              <div className={`${styles['desc']}`}>
                <div
                  className={`${styles['name']} text-row-1 underline`}
                  onClick={() => {
                    changeList(item);
                  }}
                >
                  {item.name}
                </div>
                <div className={`${styles['creater']}  text-row-1`}>
                  by{' '}
                  <span
                    className="underline"
                    onClick={() => goUserDatail(item.creator.userId)}
                  >
                    {item.creator.nickname}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
