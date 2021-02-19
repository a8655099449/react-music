import React from 'react';
import styles from './PlayerControl.less';
import PlayerControlUi from './PlayerControlUi';

import { getMusicDatail, getMusicUrl, getMusicLyric } from '@/api/api-music';

import { notification } from 'antd';
import { showModal } from '@/assets/js/tool';

// & 导入操作音量圆环的事件，由于事件过多，进行了拆分

import event from '@/assets/js/event';

import { PLAY_SONG_NAME, NOW_PLAY_ID } from '@/config/localKey';

let body = document.querySelector('body');

import { parseSongTime, parseLaric } from '@/assets/js/tool';

import { ADD_PLAY_LIST, ADD_NEW_SONG } from '@/config/eventKey';

class PlayerControl extends React.Component {
  constructor(props) {
    super(props);
    // 订阅新歌
    event.on(ADD_NEW_SONG, this.addNewSong);
    event.on(ADD_PLAY_LIST, this.addPlayList);
  }
  progData = {
    left: 0,
    progNum: 0,
    screenX: 0,
    barWidth: 494,
  };
  isCircleMove = false;
  state = {
    isLock: !localStorage.getItem('lockState')
      ? true
      : localStorage.getItem('lockState') === 'true'
      ? true
      : false, // 是否锁定
    bar3Right: this.progData.barWidth, // & 音乐进度条长度
    volumeHeight: localStorage.getItem('volumeHeight') || 93, // & 音量长度
    // songId: 1425626819, // & 音乐的id
    songId: null, // & 音乐的id
    songData: {
      singerName: '',
      songName: '',
      songPic: '//s4.music.126.net/style/web2/img/default/default_album.jpg',
    },
    songUrl: '',
    songTime: {
      // & 音乐的时间 最大时间和当前时间
      maxTime: '00:00',
      nowTime: '00:00',
    },
    isplay: false, // & 是否在播放
    showSetVolume: false, // & 展示音乐条
    listShow: false, // & 是否展示歌曲列表
    songList: JSON.parse(localStorage.getItem(PLAY_SONG_NAME)) || [], // 播放音乐的列表
    playMode: 2, // ^ 播放模式 0 列表循环 1 单曲循环 2 随机播放
    lrcArr: [], // & 歌词数组
    bar2Rigth: this.progData.barWidth,
  };
  handleSetVolumeEvent = {
    screenY: null,
    // ^ 单击了圆环
    mousedownCircle: e => {
      this.handleSetVolumeEvent.screenY = e.screenY;
      body.addEventListener(
        'mousemove',
        this.handleSetVolumeEvent.handleBodyMousemove,
      );
      body.addEventListener(
        'mouseup',
        this.handleSetVolumeEvent.handleCirclemouseup,
      );
      // ^ 设置监听事件
    },
    // mousedownCircle: () => {

    // },
    handleBodyMousemove: e => {
      let volumeHeight = this.state.volumeHeight;
      volumeHeight =
        parseInt(volumeHeight) + this.handleSetVolumeEvent.screenY - e.screenY;
      this.handleSetVolumeEvent.screenY = e.screenY;

      if (volumeHeight > 93) volumeHeight = 93;
      if (volumeHeight < 0) volumeHeight = 0;

      this.setState({ volumeHeight });
    },
    // ^ 鼠标松开 开始设置音量
    handleCirclemouseup: () => {
      let volumeHeight = parseInt(this.state.volumeHeight);
      if (isNaN(volumeHeight) || volumeHeight > 93 || volumeHeight < 0) {
        volumeHeight = 50;
      }
      this.player.volume = volumeHeight / 93;
      localStorage.setItem('volumeHeight', volumeHeight);

      body.removeEventListener(
        'mousemove',
        this.handleSetVolumeEvent.handleBodyMousemove,
      );
      body.removeEventListener(
        'mouseup',
        this.handleSetVolumeEvent.handleCirclemouseup,
      );
    },
  };
  componentDidMount() {
    this.startInit();
  }
  async getSongDataById(id, play = false) {
    if (id) this.state.songId = id;
    this.player.pause();
    this.setState({
      bar3Right: this.progData.barWidth,
    });
    let songList = this.state.songList;
    let index = songList.findIndex(item => id == item.songId);
    if (index !== -1) {
      songList.forEach(item => (item.isPlay = false));
      songList[index].isPlay = true;
      this.setState({ songList });
    }
    await this._getMusicDatail();
    await this._getMusicUrl();
    await this._getMusicLyric();
    window.localStorage.setItem(NOW_PLAY_ID, id);
    this.setLocalSongList(songList);
    if (play) {
      this.player.play();
    }

    // Promise.all([])
  }
  handleClictWidthChang = () => {
    if (body.clientWidth < 900) {
      this.progData.barWidth = 150;
    } else {
      this.progData.barWidth = 494;
    }
  };
  // ^ 初始化
  startInit() {
    // & 获取播放器示例
    this.player = document.querySelector('#music-player');
    this.lyicsWarp = document.querySelector('#lyics-list-warp');

    // & 设置初始的音量值
    this.player.volume = this.state.volumeHeight / 93;
    // & 检查本地是否存在历史的音乐记录
    let songId = window.localStorage.getItem(NOW_PLAY_ID);
    // & 监听开始播放事件
    this.player.addEventListener('play', this.handlePlayerPaly);
    // & 开始监听元数据加载成功事件
    this.player.addEventListener('loadedmetadata', this.handlePlayerLoad);
    // & 监听音乐的下载进度
    this.player.addEventListener('progress', this.handleLoadMusic);
    // & 监听音乐的播放结束事件
    this.player.addEventListener('ended', this.handlePlayEnd);
    this.player.addEventListener('timeupdate', this.handleMusicChangeTimer);
    document
      .querySelector('#progrss-bar')
      .addEventListener('click', this.handleClickBar1);

    window.addEventListener('resize', this.handleClictWidthChang);

    // & 监听音乐的暂停事件
    this.player.addEventListener('pause', this.handlePlayPause);

    if (songId) {
      let songList = this.state.songList;
      songList.forEach(i => {
        if (i.songId == songId) {
          i.isPlay = true;
        } else {
          i.isPlay = false;
        }
      });
      this.setState({
        songList,
      });

      this.getSongDataById(songId);
    }
  }

  // ^ 获得歌曲详情
  async _getMusicDatail() {
    let res = await getMusicDatail({
      ids: this.state.songId,
    });
    let songData = this.state.songData;
    songData.singerName = res.songs[0].ar[0].name;
    songData.songName = res.songs[0].name;
    songData.songPic = res.songs[0].al.picUrl;

    this.setState({ songData });
  }

  // ^ 获取歌曲的url
  async _getMusicUrl() {
    let res = await getMusicUrl({
      id: this.state.songId,
    });
    let songUrl = res.data[0].url;
    this.setState({ songUrl });
  }
  // ^ 获取歌词
  _getMusicLyric = async () => {
    let res = await getMusicLyric({
      id: this.state.songId,
    });

    if (res.code === 200) {
      if (res.nolyric) {
        return;
      }
      let lrcArr = parseLaric(res.lrc.lyric);

      this.setState({ lrcArr });
    }
  };
  // ^ 单击圆环事件
  handleCircleMouseDown = e => {
    this.isCircleMove = true;
    let circle = e.target;
    body.addEventListener('mousemove', this.handleBodyMousemove);
    body.addEventListener('mouseup', this.handleCirclemouseup);
    // body.addEventListener('mouseout', this.handleCirclemouseout);

    this.progData.screenX = e.screenX;
    this.progData.left = circle.offsetLeft;
    // & 最小值 是-14 最大值是480 进度条的总值是this.progData.barWidth
    this.progData.progNum = (circle.offsetLeft + 14) / this.progData.barWidth;
  };
  // ^  音乐加载好
  handlePlayerLoad = () => {
    // & 获得音乐的长度

    let songTime = this.state.songTime;
    songTime.maxTime = parseSongTime(this.player.duration);

    this.setState({ songTime });
  };
  // ^ 音乐开始播放
  handlePlayerPaly = () => {
    this.setState({
      isplay: true,
    });
    this.titleName = `🎵 ${this.state.songData.songName}`;
    document.title = `${this.titleName}${document.title}`;

    // & 开始监听音乐播放进度变化
    // this.player.addEventListener('timeupdate',this.handleMusicChangeTimer)
  };
  // ^ 音乐暂停
  handlePlayPause = () => {
    this.setState({
      isplay: false,
    });

    document.title = document.title.replace(this.titleName, '');
  };

  // ^ 音乐播放结束
  handlePlayEnd = () => {
    this.handleChangeNextSong();
  };
  // ^ bar1的点击事件
  handleClickBar1 = e => {
    if (e.target.matches(`.${styles['circle-bar']}`)) return;
    let clickleft = this.progData.barWidth - e.offsetX;
    this.setState({
      bar3Right: clickleft,
    });
    let proportion = 1 - clickleft / this.progData.barWidth;
    this.player.currentTime = proportion * this.player.duration;
  };
  // ^ 播放进度发生变化
  handleMusicChangeTimer = () => {
    // &
    if (this.isCircleMove) return;

    let songTime = this.state.songTime;
    songTime.nowTime = parseSongTime(this.player.currentTime);
    // & 计算圆环的位置
    let bar3Right =
      this.progData.barWidth *
      (1 - this.player.currentTime / this.player.duration);
    // 计算进度条的位置

    // & 计算歌词的位置

    // this.lyicsWarp.scrollTop = 40
    let lrcArr = this.state.lrcArr;
    let index = lrcArr.findIndex(item => item.time == songTime.nowTime);
    if (index !== -1) {
      lrcArr.forEach(item => (item.select = false));
      /*   if (lrcArr[index] && lrcArr[index].select !== undefined) {
      } */
      lrcArr[index].select = true;

      // let count = index - 4;
      this.setState({ lrcArr });
      let selectIndex = document.querySelector(`.${styles['select']}`);
      if (selectIndex) {
        this.lyicsWarp.scrollTo({
          behavior: 'smooth',
          top: selectIndex.offsetTop - 150 - selectIndex.offsetHeight,
        });
      }

      // if (count > 0) {
      //   let scrollTop = this.lyicsWarp.scrollTop;
      //   if (scrollTop < 58 * count) {
      //     this.lyicsWarp.scrollTop = 58 * count ;
      //   }
      // }
    }

    this.setState({ songTime, bar3Right, lrcArr });
  };
  // ^ 圆环鼠标松开事件
  handleCirclemouseup = e => {
    // 把移动的事件删除了
    this.isCircleMove = false;
    // 把事件删除了
    body.removeEventListener('mousemove', this.handleBodyMousemove);
    body.removeEventListener('mouseup', this.handleCirclemouseup);
    body.removeEventListener('mouseout', this.handleCirclemouseout);
    // & 设置音乐的播放位置
    let bar3Right = this.state.bar3Right;

    if (isNaN(bar3Right)) bar3Right = this.progData.barWidth;

    let proportion = 1 - bar3Right / this.progData.barWidth;

    this.player.currentTime = proportion * this.player.duration;
  };
  // ^ 点击圆环后的鼠标移动事件
  handleBodyMousemove = e => {
    let bar3Right = this.state.bar3Right - (e.screenX - this.progData.screenX);
    this.progData.screenX = e.screenX;
    if (bar3Right <= 0) {
      bar3Right = 0;
    }
    if (bar3Right >= this.progData.barWidth) {
      bar3Right = this.progData.barWidth;
    }
    // & 设置歌曲的位置 bar3Right 为 this.progData.barWidth 时歌曲进度为 0
    let proportion = 1 - bar3Right / this.progData.barWidth;
    // this.player.currentTime = proportion*this.player.duration

    let songTime = this.state.songTime;
    // & 设置播放的时间
    songTime.nowTime = parseSongTime(proportion * this.player.duration);
    if (isNaN(bar3Right)) bar3Right = 494;

    this.setState({
      bar3Right,
      songTime,
    });
  };
  // ^ 点击播放按钮 判断是否暂停
  handleClickPaly = () => {
    let isplay = !this.state.isplay;
    if (isplay) {
      this.player.play();
    } else {
      this.player.pause();
    }
    this.setState({
      isplay,
    });
  };
  // ^ 音乐下载事件
  handleLoadMusic = () => {
    if (this.player.buffered.length > 0) {
      let loadLength = this.player.buffered.end(
        this.player.buffered.length - 1,
      );
      let bar2Rigth =
        this.progData.barWidth -
        (loadLength / this.player.duration) * this.progData.barWidth;
      this.setState({ bar2Rigth });
    }
    // ......
    // 之后将bufferPercent按照自己需要的方式进行处理即可
    // 处理的时候要注意浮点数精度造成的误差。
  };
  // ^ 是否显示音乐条
  handleVolumeShow = () => {
    let showSetVolume = !this.state.showSetVolume;
    this.setState({ showSetVolume });
    if (showSetVolume) {
      body.addEventListener('click', this.handleBodyClickForSetVolume);
    }
  };
  // ^ 添加新歌
  addNewSong = async (item, type = 'playSong') => {
    let songList = this.state.songList;
    let index = songList.findIndex(item2 => item.songId === item2.songId);

    if (index !== -1) {
      if (type === 'playSong') {
        notification.open({
          message: `开始播放【${item.songName}】`,
        });
        this.palyListSong(item);
      }
      return;
    }
    songList.push({
      ...item,
      isPlay: false,
    });
    this.setState({ songList });
    this.setLocalSongList(songList);
    // return
    if (type === 'playSong') {
      notification.open({
        message: `开始播放【${item.songName}】`,
      });
      await this.getSongDataById(item.songId);
      this.player.play();
      return;
    }
    notification.open({
      message: `已添加至播放列表`,
    });
  };
  // ^ 播放列表加入一个歌单
  addPlayList = list => {
    if (!list) return;
    list[0].isPlay = true;
    this.clearSongList();
    this.setState({ songList: list });
    this.getSongDataById(list[0].songId, true);
  };

  handleBodyClickForSetVolume = e => {
    if (e.target.matches('.volume-setbar-index')) return;
    this.setState({ showSetVolume: false });
    body.removeEventListener('click', this.handleBodyClickForSetVolume);
  };

  // ^ 点击锁
  handleClickLock = () => {
    let isLock = !this.state.isLock;
    window.localStorage.setItem('lockState', isLock);
    this.setState({ isLock });
  };

  handleListShow = () => {
    let listShow = !this.state.listShow;
    this.setState({ listShow });
  };
  setLocalSongList = data => {
    localStorage.setItem(PLAY_SONG_NAME, JSON.stringify(data));
  };
  getLocalSongList = () => {
    let data = localStorage.getItem(PLAY_SONG_NAME) ?? [];
    return data;
  };
  // ^ 修改播放模式
  changePlayMode = () => {
    let playMode = this.state.playMode;
    playMode++;
    if (playMode > 2) {
      playMode = 0;
    }
    this.setState({
      playMode,
    });
  };
  // ^ 点击下一首
  handleChangeNextSong = () => {
    let songList = this.state.songList;
    if (!songList || songList.length == 0) return;
    let index = songList.findIndex(i => i.isPlay);
    index++;
    if (index === songList.length) {
      index = 0;
    }
    this.changeSongForList(index);
  };
  // ^ 点击上一首
  handleChangeProvSong = () => {
    let songList = this.state.songList;
    if (!songList || songList.length == 0) return;

    let index = songList.findIndex(i => i.isPlay);
    index--;
    if (index < 0) {
      index = songList.length - 1;
    }
    this.changeSongForList(index);
  };
  // ^ 点击列表中的某一首歌
  palyListSong = async item => {
    if (item.songId == this.state.songId) {
      this.player.play();
      return;
    }
    this.getSongDataById(item.songId, true);
  };
  // ^ 删除列表中的一首歌
  deleteOneSongForList = async item => {
    let songList = this.state.songList;
    // 删除到最后一首歌

    if (songList.length === 1) {
      showModal({
        title: '只剩一首歌啦',
        content: '是否清空所有歌曲？',
      }).then(() => {
        this.clearSongList();
      });

      return;
    }
    let index = songList.findIndex(item2 => item2.songId == item.songId);
    if (index === -1) return;
    // 获得下一首歌的id
    let songId =
      index === songList.length - 1
        ? songList[0].songId
        : songList[index + 1].songId;

    songList.splice(index, 1);
    if (songList.length === 0) {
      return;
    }
    this.getSongDataById(songId);
  };
  // ^ 删除整个列表的歌
  deleteAllSongForList = () => {
    showModal({
      title: '确认',
      content: '是否清空所有歌曲？',
    }).then(() => {
      this.clearSongList();
    });
  };
  clearSongList = () => {
    // 都恢复到初始值
    let songList = [];
    let songTime = {
      maxTime: '00:00',
      nowTime: '00:00',
    };
    let songData = {
      singerName: '',
      songName: '',
      songPic: '//s4.music.126.net/style/web2/img/default/default_album.jpg',
    };
    let bar3Right = this.progData.barWidth;
    let songUrl = '';
    let isplay = false;
    this.player.pause();
    this.setLocalSongList('');
    localStorage.setItem(NOW_PLAY_ID, '');
    this.setState({
      songList,
      songTime,
      songData,
      bar3Right,
      songUrl,
      isplay,
    });
  };

  changeSongForList = async index => {
    let songList = this.state.songList;
    songList.forEach(item => (item.isPlay = false));
    songList[index].isPlay = true;
    this.setState({
      songList,
    });
    await this.getSongDataById(songList[index].songId);
    this.player.play();
  };
  componentWillUnmount() {
    this.player.removeEventListener('play', this.handlePlayerPaly);
    // & 开始监听元数据加载成功事件
    this.player.removeEventListener('loadedmetadata', this.handlePlayerLoad);
    // & 监听音乐的下载进度
    this.player.removeEventListener('progress', this.handleLoadMusic);
    // & 监听音乐的播放结束事件
    this.player.removeEventListener('ended', this.handlePlayEnd);
    this.player.removeEventListener('timeupdate', this.handleMusicChangeTimer);
    window.removeEventListener('resize', this.handleClictWidthChang);
    body.removeEventListener('mousemove', this.handleBodyMousemove);
    body.removeEventListener('mouseup', this.handleCirclemouseup);

    this.player = null;
  }
  render() {
    return (
      <PlayerControlUi
        handelCircleClick={this.handelCircleClick}
        bar3Right={this.state.bar3Right}
        isplay={this.state.isplay}
        songUrl={this.state.songUrl}
        handleClickPaly={this.handleClickPaly}
        songTime={this.state.songTime}
        songData={this.state.songData}
        isLock={this.state.isLock}
        handleSetVolumeEvent={this.handleSetVolumeEvent}
        volumeHeight={this.state.volumeHeight}
        showSetVolume={this.state.showSetVolume}
        lrcArr={this.state.lrcArr}
        listShow={this.state.listShow}
        songList={this.state.songList}
        playMode={this.state.playMode}
        bar2Rigth={this.state.bar2Rigth}
        handleVolumeShow={this.handleVolumeShow}
        defaultWarpClick={this.defaultWarpClick}
        handleClickLock={this.handleClickLock}
        handleListShow={this.handleListShow}
        handleChangeNextSong={this.handleChangeNextSong}
        handleChangeProvSong={this.handleChangeProvSong}
        changePlayMode={this.changePlayMode}
        handleCircleMouseDown={this.handleCircleMouseDown}
        handleCirclemouseup={this.handleCirclemouseup}
        palyListSong={this.palyListSong}
        deleteOneSongForList={this.deleteOneSongForList}
        deleteAllSongForList={this.deleteAllSongForList}
        handleClickBar1={this.handleClickBar1}
      />
    );
  }
}

export default PlayerControl;
