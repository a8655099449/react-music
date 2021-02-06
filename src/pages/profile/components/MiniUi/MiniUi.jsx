import React, { useEffect, useRef, useState } from 'react';

import { debounce } from '@/assets/js/tool';

import styles from './MiniUi.less';
import UserInfo from './UserInfo';
import MiniListItem from './MiniListItem';

export default props => {
  let { userInfo, userCollectPlaylist, userCreatePlaylist } = props;
  let [navBarLeft, setNavBarLeft] = useState(56);
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

  // console.log(counterEl.current);
  const handleScroll = debounce(() => {
    console.log('--');
    let scrolltop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (!offsetTops || offsetTops.length <= 0) return;

    console.log(navBarLeft);
    if (scrolltop > offsetTops[1] && navBarLeft == 56) {
      return setNavBarLeft(200);
    }
    if (scrolltop < offsetTops[1] && navBarLeft == 200) {
      console.log(navBarLeft);
      setNavBarLeft(56);
    }
  }, 500);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('scroll', ()=>{console.log(1);})
  }, []);
  return (
    <div className={`${styles['mini-ui']}`} ref={counterEl}>
      <UserInfo userInfo={userInfo} />
      <LikeList likeListItem={likeListItem} />

      <Navbar />
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
  return (
    <div className={`${styles['nav-bar']}`}>
      <div>创建歌单</div>
      <span></span>
      <div>收藏歌单</div>
      <div className={`${styles['active-line']}`}></div>
    </div>
  );
};
