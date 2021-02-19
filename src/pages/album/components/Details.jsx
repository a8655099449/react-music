import React, { useContext } from 'react';
import styles from '../album.less';
import Context from '@/context';

import Image from '@/components/Image/Image';
import Loading from '@/components/loading/Loading2';
import { addPlayList, formatTime } from '../../../assets/js/tool';
import { goSinger } from '../../../assets/js/linkto';
const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

const Details = props => {
  const { id, albumInfo, songs } = useContext(Context);
  if (!albumInfo) return loadContent;
  let time = formatTime(albumInfo.publishTime, 'yyyy-MM-dd');
  const handleplay = () => {
    let songlist = songs.map(item => {
      return {
        singerName: item.ar[0].name,
        songId: item.id,
        songName: item.name,
        dt: item.dt,
      };
    });
    addPlayList(songlist);
  };

  return (
    <div className={`${styles['album-info']}`}>
      <div className={`${styles['pic']}`}>
        <Image src={`${albumInfo.picUrl}?param=177y177`} />
      </div>
      <div className={`${styles['desc']}`}>
        <header>
          <div className={`${styles['tag']}`}></div>
          <div className={`${styles['name']} text-row-1`}>{albumInfo.name}</div>
        </header>
        <ul className={`${styles['desclist']}`}>
          <li>
            歌手 :{' '}
            <span
              className={`underline`}
              onClick={() => goSinger(albumInfo.artist.id)}
            >
              {albumInfo.artist.name}
            </span>
          </li>
          <li>发行时间 : {time}</li>
          <li>发行公司 : {albumInfo.company || '暂无'}</li>
        </ul>

        <div className={`${styles['btn-wrap']}`}>
          <div
            className={`${styles['play']} btn btn-blue`}
            onClick={handleplay}
          >
            <i className="iconfont icon-ziyuan"></i> 播放
          </div>
          <div className={`${styles['play']} btn btn-gray`}>
            <i className="iconfont icon-shoucang1"></i> 收藏
          </div>
          <div className={`${styles['play']} btn btn-gray`}>
            <i className="iconfont icon-xiazai"></i>下载
          </div>
        </div>
      </div>

      <div className={`${styles['desc-text']}`}>
        <div>专辑介绍</div>
        <p>{albumInfo.description}</p>
      </div>
    </div>
  );
};

export default Details;
