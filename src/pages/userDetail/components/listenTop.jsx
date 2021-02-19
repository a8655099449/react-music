import React, { useContext, useState, useEffect } from 'react';
import styles from '../userDatail.less';
import Context from '@/context';
import { getUserListenHistory } from '@/api/api-user';

import Nothing from '@/components/noting/nothing.jsx';
import Loading from '@/components/loading/Loading2';

import { goSongPage, goAlbum, goSinger } from '@/assets/js/linkto';
import { playNewSong } from '@/assets/js/tool';

const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

const playSong = item => {
  let songData = {
    singerName: item.song.ar[0].name,
    songId: item.song.id,
    songName: item.song.name,
    dt: item.song.dt,
  };
  playNewSong(songData);
};

export default props => {
  // let  {listenTop} = props
  const { id, userInfo } = useContext(Context);
  const [type, setType] = useState(1);
  const [list, setlist] = useState([]);
  const [loading, setloading] = useState(true);
  const clearLoading = () => {
    setTimeout(() => {
      setloading(false);
    }, 500);
  };

  // const
  const _getUserListenHistory = async type => {
    setloading(true);
    try {
      const res = await getUserListenHistory({ type, uid: id });
      clearLoading();
      if (res.code != 200) return;
      if (type == 1) {
        return setlist(res.weekData);
      }
      setlist(res.allData);
    } catch (error) {}
  };

  useEffect(() => {
    _getUserListenHistory(type);
  }, [type]);

  let typeContent;
  if (type == 1) {
    typeContent = (
      <div>
        <span className={`${styles['active']}`} onClick={() => setType(1)}>
          最近一周
        </span>
        | <span onClick={() => setType(0)}>所有时间</span>
      </div>
    );
  } else {
    typeContent = (
      <div>
        <span onClick={() => setType(1)}>最近一周</span> |
        <span className={`${styles['active']}`} onClick={() => setType(0)}>
          所有时间
        </span>
      </div>
    );
  }

  let topListContent;

  if (loading) {
    topListContent = loadContent;
  } else if (list.length > 0) {
    topListContent = list.map((item, index) => {
      if (index < 10) {
        return <TopItem item={item} key={index} index={index + 1} />;
      }
    });
  } else {
    topListContent = <Nothing hintText="暂无记录..." />;
  }

  return (
    <div className={`${styles['listen-top']}`}>
      <header className={`${styles['common-header']}`}>
        <div>
          听歌排行 <span>累计听歌{userInfo.listenSongs}首</span>
        </div>
        {typeContent}
      </header>
      <div>{topListContent}</div>
    </div>
  );
};

const TopItem = props => {
  let { item, index } = props;
  return (
    <div className={`${styles['top-item']}`}>
      <div>{index}.</div>
      <div
        className={`iconfont icon-ziyuan`}
        onClick={() => {
          playSong(item);
        }}
      ></div>
      <div>
        <span className="underline" onClick={() => goSongPage(item.song.id)}>
          {item.song.name}
        </span>{' '}
        -{' '}
        <span
          className="underline"
          onClick={() => goSinger(item.song.ar[0].id)}
        >
          {item.song.ar[0].name}
        </span>
      </div>

      <div className={`${styles['progress']}`}>
        <div style={{ width: `${item.score}%` }}></div>
      </div>
    </div>
  );
};
