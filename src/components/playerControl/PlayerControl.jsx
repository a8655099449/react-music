import React from 'react';
// import styles from './PlayerControl.less';
import PlayerControlUi from './PlayerControlUi';

import { getMusicDatail, getMusicUrl } from '@/api/api-music';

// & 导入操作音量圆环的事件，由于事件过多，进行了拆分

import SetVolume from './setVolume';
import event from '@/assets/js/event';

let body = document.querySelector('body');
let _this;

import { parseSongTime } from '@/assets/js/tool';

class PlayerControl extends React.Component {
  constructor(props) {
    super(props);
    // 订阅新歌
    event.on('addNewSong', this.addNewSong);
    event.on('addNewSong', this.addNewSong);
    event.on('addNewSong', this.addNewSong);
    // this.handleSetVolumeEvent.mousedownCircle.bind(this)
  }
  progData = {
    left: 0,
    progNum: 0,
    screenX: 0,
  };
  isCircleMove = false;
  state = {
    isLock: false, // 是否锁定
    bar3Right: 494, // & 音乐进度条长度
    volumeHeight: localStorage.getItem('volumeHeight') || 93, // & 音量长度
    // songId: 1425626819, // & 音乐的id
    songId: null, // & 音乐的id
    songData: {
      singerName: '',
      songName: '',
      songPic:
        'http://s4.music.126.net/style/web2/img/default/default_album.jpg',
    },
    songUrl: '',
    songTime: {
      // & 音乐的时间 最大时间和当前时间
      maxTime: '00:00',
      nowTime: '00:00',
    },
    isplay: false, // & 是否在播放
    showSetVolume: false, // & 是否在播放
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
      // console.log(this.state.volumeHeight);
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
      this.palyer.volume = volumeHeight / 93;
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

    // this.palyer.currentTime = 1
  }
  async getSongDataById(id) {
    if (id) this.state.songId = id;
    await this._getMusicDatail();
    await this._getMusicUrl();
    window.localStorage.setItem('palySongId', id);

    // Promise.all([])
  }

  // ^ 初始化
  startInit() {
    // & 获取播放器示例
    this.palyer = document.querySelector('#music-player');
    // & 设置初始的音量值
    this.palyer.volume = this.state.volumeHeight / 93;
    // & 检查本地是否存在历史的音乐记录
    let songId = window.localStorage.getItem('palySongId');
    if (songId) {
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
    songData.songName = res.songs[0].al.name;
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
    // & 监听开始播放事件
    this.palyer.addEventListener('play', this.handlePlayerPaly);
    // & 开始监听元数据加载成功事件
    this.palyer.addEventListener('loadedmetadata', this.handlePlayerLoad);
    // & 监听音乐的下载进度
    this.palyer.addEventListener('progress', this.handleLoadMusic);
  }
  // ^ 单击圆环事件
  handleCircleMouseDown = e => {
    this.isCircleMove = true;
    let circle = e.target;
    body.addEventListener('mousemove', this.handleBodyMousemove);
    body.addEventListener('mouseup', this.handleCirclemouseup);
    body.addEventListener('mouseout', this.handleCirclemouseout);

    this.progData.screenX = e.screenX;
    this.progData.left = circle.offsetLeft;
    // & 最小值 是-14 最大值是480 进度条的总值是494
    this.progData.progNum = (circle.offsetLeft + 14) / 494;
  };
  // ^  音乐加载好
  handlePlayerLoad = () => {
    // & 获得音乐的长度

    let songTime = this.state.songTime;
    songTime.maxTime = parseSongTime(this.palyer.duration);

    this.setState({ songTime });
  };
  // ^ 音乐开始播放
  handlePlayerPaly = () => {
    this.setState({
      isplay: true,
    });
    // & 开始监听音乐播放进度变化
    // this.player.addEventListener('timeupdate',this.handleMusicChangeTimer)
    this.palyer.addEventListener('timeupdate', this.handleMusicChangeTimer);
  };
  // handleCirclemouseout = () => {};
  // ^ 播放进度发生变化
  handleMusicChangeTimer = () => {
    // &
    if (this.isCircleMove) return;

    let songTime = this.state.songTime;
    songTime.nowTime = parseSongTime(this.palyer.currentTime);
    // & 计算圆环的位置
    let bar3Right = 494 * (1 - this.palyer.currentTime / this.palyer.duration);
    // 计算进度条的位置

    this.setState({ songTime, bar3Right });
  };
  // ^ 圆环鼠标松开事件
  handleCirclemouseup = () => {
    // 把移动的事件删除了
    this.isCircleMove = false;
    // 把事件删除了
    body.removeEventListener('mousemove', this.handleBodyMousemove);
    body.removeEventListener('mouseup', this.handleCirclemouseup);
    body.removeEventListener('mouseout', this.handleCirclemouseout);
    // & 设置音乐的播放位置呢
    let bar3Right = this.state.bar3Right;
    let proportion = 1 - bar3Right / 494;
    this.palyer.currentTime = proportion * this.palyer.duration;
  };
  // ^ 点击圆环后的鼠标移动事件
  handleBodyMousemove = e => {
    let bar3Right = this.state.bar3Right - (e.screenX - this.progData.screenX);
    this.progData.screenX = e.screenX;
    if (bar3Right <= 0) {
      bar3Right = 0;
    }
    if (bar3Right >= 494) {
      bar3Right = 494;
    }
    // & 设置歌曲的位置 bar3Right 为 494 时歌曲进度为 0
    let proportion = 1 - bar3Right / 494;
    // this.palyer.currentTime = proportion*this.palyer.duration

    let songTime = this.state.songTime;
    // & 设置播放的时间
    songTime.nowTime = parseSongTime(proportion * this.palyer.duration);

    this.setState({
      bar3Right,
      songTime,
    });
  };
  // ^ 点击播放按钮 判断是否暂停
  handleClickPaly = () => {
    let isplay = !this.state.isplay;
    if (isplay) {
      this.palyer.play();
    } else {
      this.palyer.pause();
    }
    this.setState({
      isplay,
    });
  };
  // ^ 音乐下载事件
  handleLoadMusic = () => {};
  // ^ 是否显示音乐条
  handleVolumeShow = () => {
    console.log('展示音乐条的事件');
    let showSetVolume = !this.state.showSetVolume;
    this.setState({ showSetVolume });
    if (showSetVolume) {
      body.addEventListener('click', this.handleBodyClickForSetVolume);
    }
  };
  // ^ 添加新歌
  addNewSong = async item => {
    // console.log(item);
    // console.log('添加了新歌', item);
    await this.getSongDataById(item.songId);
    this.palyer.play();
  };
  handleBodyClickForSetVolume = e => {
    if (e.target.matches('.volume-setbar-index')) return;
    this.setState({ showSetVolume: false });
    body.removeEventListener('click', this.handleBodyClickForSetVolume);
  };

  // ^ 点击锁
  handleClickLock = () => {
    let isLock = !this.state.isLock;
    console.log(isLock);
    this.setState({ isLock });
  };
  defaultWarpClick = e => {
    // console.log('添加的默认事件');
    // // e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
  };
  render() {
    return (
      <PlayerControlUi
        handelCircleClick={this.handelCircleClick}
        handleCircleMouseDown={this.handleCircleMouseDown}
        handleCirclemouseup={this.handleCirclemouseup}
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
        handleVolumeShow={this.handleVolumeShow}
        defaultWarpClick={this.defaultWarpClick}
        handleClickLock={this.handleClickLock}
      />
    );
  }
}

export default PlayerControl;
