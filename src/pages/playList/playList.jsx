// ! 歌单详情页面

import React from 'react';

import styles from './playList.less';
import {
  getSongListDetail,
  getSongListRecommentByListId,
} from '@/api/api-music';
import Detail from '@/components/playListDetail/Detail';
import Subscribers from './components/subscribers/subscribers';
import Recomment from './components/recomment/recomment';
import Download from './components/download/download';
import SongList from './components/songList/songList';
import BtnWarp from './components/BtnWarp/BtnWarp';
import { history } from 'umi';
import CommentInp from '@/components/CommentInp/CommentInp';

import { addPlayList, scrollTopTo } from '@/assets/js/tool';

class playList extends React.Component {
  constructor(props) {
    super(props);

    let params = props.location.query;
    // console.log(params);
    this.listId = params.id || 3124642208;
    this.init();
  }

  listId = 3124642208;
  init() {
    scrollTopTo(0);
    this._getSongListDetail();
    this._getSongListRecommentByListId();
  }
  state = {
    tags: [],
    subscribers: [],
    name: '',
    description: '',
    creator: null,
    coverImgUrl: '',
    tracks: [],
    isrequest: false,
    playCount: 0,
    subscribedCount: 0,
    shareCount: 0,
    commentCount: 0,
    recommentList: [],
    playListData: null,
  };

  // ^ 获取歌单详情
  _getSongListDetail = async () => {
    let res = await getSongListDetail({
      id: this.listId,
    });
    if (res.code === 200) {
      // console.log(res);

      let playListData = res.playlist;
      console.log(playListData);
      let { tracks = [], subscribers = [] } = playListData;
      this.setState({
        tracks,
        playListData,
        isrequest: true,
        subscribers,
      });
    }
  };
  _getSongListRecommentByListId = async () => {
    let res = await getSongListRecommentByListId({
      id: this.listId,
    });
    // console.log(res);
    let recommentList = res.playlists;
    if (res.code === 200) {
      this.setState({ recommentList });
    }
  };
  // ! 监听路由变换切换歌单
  onlisten = history.listen((location, action) => {
    if (
      location.pathname === '/playlist' &&
      location.query.id &&
      this.listId != location.query.id
    ) {
      this.listId = location.query.id;
      this.init();
    }
  });

  // ^ 播放整个列表
  playList = () => {
    let list = this.state.tracks.map(item => {
      return {
        songName: item.name,
        singerName: item.ar[0].name,
        songId: item.id,
        dt: item.dt,
      };
    });
    addPlayList(list);
  };
  // ^ 更换歌单

  changeList = item => {
    // console.log(item);
    // this.listId = item.id;
    history.push({
      pathname: '/playlist',
      query: {
        id: item.id,
      },
    });
  };
  render() {
    return (
      <div className={`${styles['content']} content-box page-content`}>
        <div className={`${styles['left-content']}`}>
          <Detail data={this.state.playListData} />
          <div className="ismini">
            <BtnWarp playList={this.playList} />
          </div>

          <SongList
            tracks={this.state.tracks}
            playCount={this.state.playCount}
          />
          <div className="ismini">
            <Subscribers subscribers={this.state.subscribers} />
            <Recomment
              recommentList={this.state.recommentList}
              changeList={this.changeList}
            />
          </div>

          <CommentInp />
        </div>

        <div className={`${styles['right-content']}`}>
          <div className="isweb">
            <Subscribers subscribers={this.state.subscribers} />
            <Recomment
              recommentList={this.state.recommentList}
              changeList={this.changeList}
            />
          </div>
          <Download />
        </div>
      </div>
    );
  }
}

export default playList;
