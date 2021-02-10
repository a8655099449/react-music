import React from 'react';
import styles from './Pagination.less';
import { createArr } from '@/assets/js/tool';

export default props => {
  let {
    changePage = () => {
      console.log('默认函数');
    },
    seletPage,
    pageSize = 10,
  } = props;
  if (!pageSize || pageSize <= 1) {
    return null;
  }

  // ^ 最大页数是 9
  // let pageSize = 20;
  let maxSize = 10;
  if (pageSize < maxSize) {
    maxSize = pageSize;
  }

  let pageList = createArr(maxSize);

  // ^ 选中的页码
  // let seletPage = 3;
  // ^ 是否超出 ?
  seletPage = parseInt(seletPage);
  let isBeyond = pageSize > maxSize && pageSize > maxSize + seletPage - 5;
  let isBeyondBefoe = seletPage > 5 && pageSize > maxSize;

  function createDom(index, iskey = true) {
    let btnClass = index === seletPage ? 'btn-main' : 'btn-gray';
    let keyValue = iskey ? index : Math.random();
    return (
      <div className={`${styles['lastpage']}`} key={keyValue}>
        <div
          className={`${styles['page-item']} btn ${btnClass}`}
          key={index}
          onClick={() => {
            changePage(index);
          }}
        >
          {index}
        </div>
      </div>
    );
  }

  let provclass = seletPage == 1 ? 'btn-disabled' : 'btn-gray';
  let nextclass = seletPage == pageSize ? 'btn-disabled' : 'btn-gray';

  return (
    <div className={`${styles['pagination']}`}>
      <div
        className={`${styles['prov']} ${styles['btn-item']} ${provclass} btn`}
        onClick={() => {
          if (seletPage == 1) return;
          changePage(seletPage - 1);
        }}
      >
        <i className={`icon-you iconfont turn`}></i>
        上一页
      </div>
      <div className={`${styles['page-box']}`}>
        {pageList.map((item, index) => {
          // ^  第一种情况 最大页数不超过容量
          if (!isBeyondBefoe && !isBeyond) {
            return createDom(index + 1);
          }
          // ^ 最大页数超过容量
          if (isBeyond && !isBeyondBefoe) {
            if (index + 1 === maxSize) {
              return (
                <div className={`${styles['lastpage']}`} key={index + 'cc'}>
                  <div> ··· </div>
                  {createDom(pageSize, null)}
                </div>
              );
            }
            return createDom(index + 1);
          }
          if (!isBeyond && isBeyondBefoe) {
            if (index === 0) {
              return (
                <div className={`${styles['lastpage']}`} key={index + 'cc'}>
                  {createDom(index + 1, null)}
                  <div> ··· </div>
                </div>
              );
            }
            return createDom(pageSize - maxSize + index + 1);
          }

          if (isBeyond && isBeyondBefoe) {
            if (index === 0) {
              return (
                <div className={`${styles['lastpage']}`} key={index + 'cc'}>
                  {createDom(index + 1, null)}
                  <div> ··· </div>
                </div>
              );
            }
            if (index + 1 === maxSize) {
              return (
                <div className={`${styles['lastpage']}`} key={index + 'cc'}>
                  <div> ··· </div>
                  {createDom(pageSize, null)}
                </div>
              );
            }
            return createDom(index + seletPage - 4);
          }
        })}
      </div>
      <div
        className={`${styles['next']} ${styles['btn-item']} ${nextclass} btn`}
        onClick={() => {
          if (seletPage == pageSize) return;

          changePage(seletPage + 1);
        }}
      >
        下一页 <i className={`icon-you iconfont`}></i>
      </div>
    </div>
  );
};
