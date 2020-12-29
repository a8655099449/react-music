import React from 'react';
// import styles from './PlayerControl.less';
import PlayerControlUi from './PlayerControlUi';

import { getMusicDatail, getMusicUrl } from '@/api/api-music';

// & 导入操作音量圆环的事件，由于事件过多，进行了拆分

import SetVolume from './setVolume';

// console.log('事件是',mousedownCircle);

let body = document.querySelector('body');
let _this;

import { parseSongTime } from '@/assets/js/tool';

class PlayerControl extends React.Component {
  // handelCircleClick = () => {
  //   console.log('我点击了');
  // }
  constructor(props) {
    super(props);
    // this.handleSetVolumeEvent.mousedownCircle.bind(this)
  }
  progData = {
    left: 0,
    progNum: 0,
    screenX: 0,
  };
  isCircleMove = false;
  state = {
    bar3Right: 494, // & 音乐进度条长度
    volumeHeight: localStorage.getItem('volumeHeight') || 93, // & 音量长度
    // songId: 1425626819, // & 音乐的id
    songId: 1367368790, // & 音乐的id
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
  };
  handleSetVolumeEvent = {
    screenY: null,
    // ^ 单击了圆环
    mousedownCircle: e => {
      // console.log('圆环被点击',this.handleSetVolumeEvent.handleBodyMousemove);
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
    //   console.log('圆环被点击',this);
    // },
    handleBodyMousemove: e => {
      // console.log('鼠标开始移动',this);
      // console.log;
      let volumeHeight = this.state.volumeHeight;
      volumeHeight += this.handleSetVolumeEvent.screenY - e.screenY;
      this.handleSetVolumeEvent.screenY = e.screenY;

      if (volumeHeight > 93) volumeHeight = 93;
      if (volumeHeight < 0) volumeHeight = 0;

      // console.log(volumeHeight);
      this.setState({ volumeHeight });
    },
    // ^ 鼠标松开 开始设置音量
    handleCirclemouseup: () => {
      localStorage.setItem('volumeHeight', this.state.volumeHeight);
      // console.log('鼠标松开',this);
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
    this._getMusicDatail();
    this._getMusicUrl();
    this.palyer = document.querySelector('#music-player');
    // this.palyer.currentTime = 1
  }
  // ^ 获得歌曲详情
  async _getMusicDatail() {
    let res = await getMusicDatail({
      ids: this.state.songId,
    });
    console.log(res);
    let songData = this.state.songData;
    songData.singerName = res.songs[0].ar[0].name;
    songData.songName = res.songs[0].al.name;
    songData.songPic = res.songs[0].al.picUrl;
    // console.log(songData);
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
    // console.table(songUrl);
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
    // ^ 获得音乐的长度

    let songTime = this.state.songTime;
    songTime.maxTime = parseSongTime(this.palyer.duration);
    // this.palyer.play()
    this.setState({ songTime });
  };
  handlePlayerPaly = () => {
    console.log('音乐开始播放了');
    // & 开始监听音乐播放进度变化
    // this.player.addEventListener('timeupdate',this.handleMusicChangeTimer)
    this.palyer.addEventListener('timeupdate', this.handleMusicChangeTimer);
  };
  handleCirclemouseout = () => {
    console.log('鼠标移出浏览器界面');
  };
  // ^ 播放进度发生变化
  handleMusicChangeTimer = () => {
    // console.log('播放进度发生了变化');
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
    // console.log(this);
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
    // console.log();
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

    // console.log(bar3Right);
    this.setState({
      bar3Right,
      songTime,
    });
  };
  // ^ 点击播放按钮 判断是否暂停
  handleClickPaly = () => {
    let isplay = !this.state.isplay;
    // console.log('点击了播放',isPlay);
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
  handleLoadMusic = () => {
    // console.log('正在下载');
    // console.log(this.palyer.buffered);
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
        handleSetVolumeEvent={this.handleSetVolumeEvent}
        volumeHeight={this.state.volumeHeight}
      />
    );
  }
}

export default PlayerControl;
