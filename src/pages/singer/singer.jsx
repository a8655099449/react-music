import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Context from '@/context';
import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';
import styles from './singer.less';

import optionList from './list';
import { history } from 'umi';
import {
  getSingerAlbum,
  getSingerDesc,
  getSingerDetail,
  getSingerMv,
  getSingerTopSong,
} from '../../api/api-singer';

import Pic from './components/pic';
import BaseOptionNav from '../../components/baseOptionNav/BaseOptionNav';
import list from './list';
import { scrollTopTo } from '../../assets/js/tool';

const singer = props => {
  // let { userInfo, isLogin } = props;
  let query = props.location.query;
  let id = 861777;
  let type = 0;

  if (query.id && !isNaN(query.id)) id = parseInt(query.id);
  if (query.type && !isNaN(query.type) && query.type < list.length)
    type = parseInt(query.type);

  const [singerData, setSingerData] = useState(singerData);
  const [optionIndex, setOptionIndex] = useState(type);
  const [hotsongs, setHotsongs] = useState([]);
  const [albums, setAlbums] = useState([]);

  // ^ 获得歌手详情
  const _getSingerDetail = async () => {
    const res = await getSingerDetail({ id });
    if (res.code !== 200) return;
    setSingerData(res.data);

    document.title = `${res.data.artist.name} - 歌手`;
  };

  // ^ 获得歌手热门50首歌
  const _getSingerTopSong = async () => {
    const res = await getSingerTopSong({ id });
    if (res.code !== 200) return;
    setHotsongs(res.songs);
  };
  // ^ 获取歌手专辑

  const _getSingerAlbum = async () => {
    const res = await getSingerAlbum({ id });
    if (res.code !== 200) return;
    setAlbums(res.hotAlbums);
  };

  const routerChange = location => {
    if (location.pathname !== '/singer') return;
    let selectType = parseInt(location.query.type);
    if (!isNaN(selectType) && selectType < list.length)
      setOptionIndex(parseInt(selectType));
  };

  useEffect(() => {
    _getSingerDetail();
    // _getSingerDesc();
    _getSingerTopSong();
    _getSingerAlbum();
    scrollTopTo(0);
    // _getSingerMv()
  }, []);
  history.listen(routerChange);

  let OptionContent = list[optionIndex].content;

  const value = { id, singerData, hotsongs, albums };
  return (
    <div className={`${styles['singer-page']} content-box page-content`}>
      {/* {id} */}
      <Context.Provider value={value}>
        <div className={`${styles['left-content']}`}>
          <Pic />
          <BaseOptionNav
            list={optionList.map(item => item.name)}
            activeIndex={optionIndex}
            changeNav={index => {
              history.replace({
                pathname: '/singer',
                query: {
                  id,
                  type: index,
                },
              });
            }}
          />
          <div className={`${styles['option-content']}`}>
            <OptionContent />
          </div>
        </div>
        <div className={`${styles['right-content']}`}></div>
      </Context.Provider>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(singer);
