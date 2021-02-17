import React, { useEffect, useRef, useState } from 'react';

import { debounce, scrollTopTo } from '@/assets/js/tool';

import styles from './MiniUi.less';
import UserInfo from './UserInfo';
import MiniListItem from './MiniListItem';

export default props => {
  let { userInfo, userCollectPlaylist, userCreatePlaylist } = props;
  let [scrolltop, setScrolltop] = useState(0);
  let likeListItem = {};

  const counterEl = useRef(null);
  if (userCreatePlaylist.length > 0) {
    likeListItem = userCreatePlaylist[0];
  }
  // let playlisDom;
  let offsetTops = [];
  if (counterEl && counterEl.current) {
    let playlisDom = counterEl.current.querySelectorAll(
      `.${styles['desc-text']}`,
    );
    offsetTops = [playlisDom[0].offsetTop, playlisDom[1].offsetTop];
  }

  const handleScroll = debounce(() => {
    let scrolltop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (!offsetTops || offsetTops.length <= 0) return;
    setScrolltop(scrolltop);
  }, 500);

  useEffect(() => {
    if (!offsetTops) return;
    // setTimeout(() => {
    // }, 0);
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offsetTops]);
  return (
    <div className={`${styles['mini-ui']}`} ref={counterEl}>
      <UserInfo userInfo={userInfo} />
      <LikeList likeListItem={likeListItem} />

      <Navbar scrolltop={scrolltop} offsetTops={offsetTops} />
      <CreateList list={userCreatePlaylist} text="创建" />
      <CreateList list={userCollectPlaylist} text="收藏" />
    </div>
  );
};

const LikeList = props => {
  return (
    <div className={`${styles['like-list']} ${styles['bg']}`}>
      <MiniListItem item={props.likeListItem} />
    </div>
  );
};

const CreateList = props => {
  let { list = [], text } = props;
  return (
    <div className={`${styles['like-list']} ${styles['bg']}`}>
      <div className={`${styles['desc-text']}`}>
        {text}歌单（{list.length}个）
      </div>
      {list.map((t, i) => {
        if (text == '创建' && i == 0) {
          return null;
        }
        return <MiniListItem item={t} key={i} />;
      })}
    </div>
  );
};

const Navbar = props => {
  let { scrolltop, offsetTops } = props;
  //  style={{left:navBarLeft}}

  let [left, setLeft] = useState(16);
  useEffect(() => {
    if (!offsetTops || scrolltop < offsetTops[1] - 100) {
      setLeft(16);
    } else {
      setLeft(66.5);
    }
  }, [scrolltop]);
  let className;
  if (scrolltop > 200) {
    className = styles['position-top'];
  }
  return (
    <div className={`${styles['nav-bar']} ${className}`}>
      <div
        onClick={() => {
          setLeft(16);
          scrollTopTo(offsetTops[0] - 100);
        }}
      >
        创建歌单
      </div>
      <span></span>
      <div
        onClick={() => {
          scrollTopTo(offsetTops[1] - 100);
          setLeft(66.5);
        }}
      >
        收藏歌单
      </div>
      <div
        className={`${styles['active-line']}`}
        style={{ left: left + '%' }}
      ></div>
    </div>
  );
};
