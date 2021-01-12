import React from 'react';
import styles from './RecPlaylist.less';
import BaseTitle from '@/components/baseTitle/baseTitle';

export default props => {
  let { recPlayList, goPlayList } = props;
  // console.log(recPlayList);
  return (
    <div className={`${styles['rec-playlist']}`}>
      <BaseTitle title="包含这首歌的歌单" />
      <div className={`${styles['list']}`}>
        {recPlayList.map((item, index) => {
          return (
            <div className={`${styles['list-item']}`} key={item.id}>
              <div className={`${styles['img-box']}`}>
                <img src={item.coverImgUrl} alt="那些好听到爆了的歌" />
              </div>
              <div className={`${styles['desc-box']}`}>
                <p
                  className={`${styles['name']} underline text-row-1`}
                  onClick={() => {
                    goPlayList(item);
                  }}
                >
                  {item.name}
                </p>
                <div className="text-row-1">
                  by{' '}
                  <span className={`underline`}>{item.creator.nickname}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
