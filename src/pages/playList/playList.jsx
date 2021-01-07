// ! 歌单详情页面

import React from 'react';

import styles from './playList.less';
import {
  getSongListDetail,
  getSongListRecommentByListId,
} from '@/api/api-music';
import Detail from './components/detail/detail';
import Subscribers from './components/subscribers/subscribers';
import Recomment from './components/recomment/recomment';
import Download from './components/download/download';
import SongList from './components/songList/songList';

class playList extends React.Component {
  constructor(props) {
    super(props);

    let params = props.location.query;
    // console.log(params);
  }

  listId = 3136952023;
  componentDidMount() {
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
  };

  // ^ 获取歌单详情
  _getSongListDetail = async () => {
    let res = await getSongListDetail({
      id: this.listId,
    });
    if (res.code === 200) {
      console.log(res);
      let {
        tags,
        subscribers,
        name,
        description,
        creator,
        coverImgUrl,
        tracks,
        playCount,
        subscribedCount,
        shareCount,
        commentCount,
      } = res.playlist;
      this.setState({
        tags,
        subscribers,
        name,
        description,
        creator,
        coverImgUrl,
        tracks,
        playCount,
        subscribedCount,
        shareCount,
        commentCount,
        isrequest: true,
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
  render() {
    return (
      <div className={`${styles['content']} content-box page-content`}>
        <div className={`${styles['left-content']}`}>
          <Detail
            tags={this.state.tags}
            name={this.state.name}
            description={this.state.description}
            creator={this.state.creator}
            coverImgUrl={this.state.coverImgUrl}
            isrequest={this.state.isrequest}
            subscribedCount={this.state.subscribedCount}
            shareCount={this.state.shareCount}
            commentCount={this.state.commentCount}
          />

          <SongList />
        </div>

        <div className={`${styles['right-content']}`}>
          <Subscribers subscribers={this.state.subscribers} />
          <Recomment recommentList={this.state.recommentList} />
          <Download />
        </div>
      </div>
    );
  }
}

export default playList;
