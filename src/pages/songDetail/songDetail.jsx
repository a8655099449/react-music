import React from 'react';
import styles from './songDetail.less';
import Detail from './detail/Detail';
import RecPlaylist from './recPlaylist/RecPlaylist';
import SimiSong from './simiSong/SimiSong';
import { history } from 'umi';
import event from '@/assets/js/event';

import {
  getMusicDatail,
  getMusicComment,
  getMusicLyric,
  getPlayListForSongID,
  getSimiSong,
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
    limit: 20,
    offset: 1,
  };
  state = {
    songData: null,
    commentCount: 0,
    lrcArr: [],
    lrcMen: {},
    recPlayList: [],
    simiSongs: [],
  };

  init() {
    this._getMusicDatail();
    this._getMusicComment();
    this._getMusicLyric();
    this._getPlayListForSongID();
    this._getSimiSong();
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

  unlisten = history.listen((location, action) => {
    // console.log(this);
    // console.log(action);
    if (location.pathname === '/songdetail' && location.query.songId) {
      this.songId = location.query.songId;
      this.init();
    }
  });
  // ^ 获取歌曲评论

  async _getMusicComment() {
    let res = await getMusicComment({
      id: this.songId,
      ...this.limitData,
    });
    if (res.code === 200) {
      let commentCount = res.total;

      this.setState({
        commentCount,
      });
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

  render() {
    return (
      <div className={`page-content content-box ${styles['content']}`}>
        <div className={`${styles['left-content']}`}>
          <Detail
            songData={this.state.songData}
            commentCount={this.state.commentCount}
            lrcMen={this.state.lrcMen}
            lrcArr={this.state.lrcArr}
            clickPlay={this.clickPlay}
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

export default songDetail;
