import React from 'react';
import styles from './songDetail.less';
import Detail from './detail/Detail';
import RecPlaylist from './recPlaylist/RecPlaylist';
import SimiSong from './simiSong/SimiSong';
import { history } from 'umi';
import event from '@/assets/js/event';
import Comment from './comment/Comment';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '@/store/public-map';

import Pagination from '@/components/Pagination/Pagination';

import {
  getMusicDatail,
  getMusicLyric,
  getPlayListForSongID,
  getSimiSong,
  getCommentNew,
} from '@/api/api-music';
import { parseLaric } from '@/assets/js/tool';

class songDetail extends React.Component {
  constructor(props) {
    super(props);
    let params = props.location.query;
    this.songId = params.songId || 411214279;
    this.init();
  }
  songId = 411214279;
  limitData = {
    pageNo: 1,
    pageSize: 10,
    type: 0,
  };
  state = {
    songData: null,
    commentCount: 0,
    lrcArr: [],
    lrcMen: {},
    recPlayList: [],
    simiSongs: [],
    hotComments: [],
    lrcLen: 5,
    isMore: false,
    newComments: [],
    seletPage: 1,
    pageSize: 0,
  };

  init() {
    this._getMusicDatail();
    this._getMusicHotComment();
    this._getMusicLyric();
    this._getPlayListForSongID();
    this._getSimiSong();
    this._getMusicNewComment();
  }
  // ^ 获取歌曲详情
  async _getMusicDatail() {
    let res = await getMusicDatail({
      ids: this.songId,
    });
    if (res.code === 200) {
      let songs = res.songs[0];
      this.songs = songs;
      let name = songs.name;
      let al = songs.al;
      let singer = songs.ar[0];
      // let picUrl = al

      this.setState({
        songData: { singer, name, al },
      });
    }
  }

  showMoreLrc = () => {
    let isMore = !this.state.isMore;
    let lrcLen = isMore ? this.state.lrcArr.length : 5;
    this.setState({ lrcLen, isMore });
  };
  unlisten = history.listen((location, action) => {
    // console.log(this);
    // console.log(action);
    if (location.pathname === '/songdetail' && location.query.songId) {
      this.songId = location.query.songId;
      this.init();
    }
  });
  // ^ 获取歌曲热门评论

  async _getMusicHotComment() {
    let res = await getCommentNew({
      id: this.songId,
      sortType: 2,
      pageNo: 1,
      pageSize: 10,
      type: 0,
    });
    // console.log(res);
    if (res.code === 200) {
      let hotComments = res.data.comments;
      let commentCount = res.data.totalCount;
      this.setState({
        commentCount,
        hotComments,
      });
    }
  }

  // ^ 获取最新评论
  async _getMusicNewComment() {
    let cursor = null;
    let Comments = this.state.newComments;
    if (this.limitData.pageNo > 1) {
      cursor = Comments[Comments.length - 1].time;
    }

    let res = await getCommentNew({
      id: this.songId,
      sortType: 3,
      cursor,
      ...this.limitData,
    });
    if (res.code === 200) {
      let newComments = res.data.comments;
      // console.log(res.data.totalCount);
      let pageSize = Math.ceil(res.data.totalCount / 30);
      // console.log(pageSize);
      this.setState({ newComments, pageSize });
    }
  }

  // ^ 获取歌词信息
  async _getMusicLyric() {
    let res = await getMusicLyric({
      id: this.songId,
    });

    if (res.code === 200 && !res.nolyric) {
      // console.log(res);
      let lrcArr = parseLaric(res.lrc.lyric);
      let lrcMen = {};
      if (res.lyricUser) {
        lrcMen = res.lyricUser;
      }
      this.setState({ lrcArr, lrcMen });
    }
  }
  // ^ 获取相似歌单
  async _getPlayListForSongID() {
    let res = await getPlayListForSongID({
      id: this.songId,
    });
    let recPlayList = res.playlists;
    this.setState({ recPlayList });
  }

  // ^ 获得相似歌曲
  async _getSimiSong() {
    let res = await getSimiSong({
      id: this.songId,
    });
    let simiSongs = res.songs;
    this.setState({ simiSongs });
  }
  // ^ 更换歌曲信息
  changeSongData = (item, type) => {
    switch (type) {
      case 'changeSong':
        history.push({
          pathname: '/songdetail',
          query: {
            songId: item.id,
          },
        });
        break;
      case 'playSong':
      case 'addPlayList':
        // console.log('播放音乐');
        // console.log(item);
        let data = {
          singerName: item.artists[0].name,
          songId: item.id,
          songName: item.name,
          dt: item.duration,
        };

        event.emit('addNewSong', data, type);
        break;
    }
  };

  // ^ 前往歌单列表

  goPlayList = item => {
    history.push({
      pathname: '/playlist',
      query: {
        id: item.id,
      },
    });
  };
  // ^ 点击播放
  clickPlay = () => {
    // console.log(this.songs);
    let songName = this.songs.name;
    let songId = this.songs.id;
    let singerName = this.songs.ar[0].name;
    let dt = this.songs.dt;

    // return;
    event.emit('addNewSong', { singerName, songId, songName, dt });
  };
  showLogin = () => {
    event.emit('showLogin');
  };
  changePage = seletPage => {
    if (seletPage <= 0 || seletPage > this.state.pageSize) return;
    // return console.log(seletPage == this.select.seletPage);
    if (seletPage == this.state.seletPage) return;
    this.limitData.pageNo = seletPage;
    this._getMusicNewComment();
    this.setState({ seletPage });
  };

  render() {
    let { userInfo, isLogin } = this.props;
    return (
      <div className={`page-content content-box ${styles['content']}`}>
        <div className={`${styles['left-content']}`}>
          <Detail
            songData={this.state.songData}
            commentCount={this.state.commentCount}
            lrcMen={this.state.lrcMen}
            lrcArr={this.state.lrcArr}
            lrcLen={this.state.lrcLen}
            isMore={this.state.isMore}
            clickPlay={this.clickPlay}
            showMoreLrc={this.showMoreLrc}
          />
          <Comment
            hotComments={this.state.hotComments}
            commentCount={this.state.commentCount}
            newComments={this.state.newComments}
            isLogin={isLogin}
            userInfo={userInfo}
            showLogin={this.showLogin}
          />
          <Pagination
            changePage={this.changePage}
            seletPage={this.state.seletPage}
            pageSize={this.state.pageSize}
          />
        </div>
        <div className={`${styles['right-content']}`}>
          <RecPlaylist
            recPlayList={this.state.recPlayList}
            goPlayList={this.goPlayList}
          />
          <SimiSong
            simiSongs={this.state.simiSongs}
            changeSongData={this.changeSongData}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(songDetail);
