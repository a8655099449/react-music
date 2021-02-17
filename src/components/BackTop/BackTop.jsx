import React from 'react';
import styles from './BackTop.less';

export default () => {
  window.addEventListener('scroll', handleScroll);

  function handleScroll() {
    let clientHeight = document.body.clientHeight;
    let scrolltop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    let BackTopDom = document.querySelector('#back-top');

    if (scrolltop > clientHeight && BackTopDom) {
      BackTopDom.style.bottom = '100px';
    }
    if (scrolltop < clientHeight && BackTopDom) {
      BackTopDom.style.bottom = '-100px';
    }

    // document.body.scrollTo;
  }
  function handleScrollto(e) {
    e.target.classList.add(styles['mov']);
    setTimeout(() => {
      let BackTopDom = document.querySelector('#back-top');
      BackTopDom.classList.remove(styles['mov']);
      BackTopDom.style.bottom = '-100px';
    }, 1000);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }
  return (
    <div
      className={`${styles['back-top']} icon-huojian iconfont `}
      onClick={handleScrollto}
      id="back-top"
    >
      <i className={`${styles['fire']} icon-huoyan iconfont `}></i>
    </div>
  );
};
