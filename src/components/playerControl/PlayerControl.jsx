import React from 'react';
// import styles from './PlayerControl.less';
import PlayerControlUi from './PlayerControlUi';

import { getMusicDatail } from '@/api/api-music';

let body = document.querySelector('body');
let _this;
class PlayerControl extends React.Component {
  // handelCircleClick = () => {
  //   console.log('我点击了');
  // }
  progData = {
    left: 0,
    progNum: 0,
    screenX: 0,
  };
  state = {
    bar3Right: 494,
    songId: 1425626819,
  };
  componentDidMount() {
    this._getMusicDatail();
  }
  // 获得歌曲详情
  async _getMusicDatail() {
    let res = await getMusicDatail({
      ids: this.state.songId,
    });
    console.log(res);
  }
  handleCircleMouseDown = e => {
    // console.log('鼠标按下');
    // console.log(e.target);

    let circle = e.target;

    _this = this;
    body.addEventListener('mousemove', this.handleBodyMousemove);
    body.addEventListener('mouseup', this.handleCirclemouseup);
    body.addEventListener('mouseout', this.handleCirclemouseout);
    // console.log(body);
    // console.dir(circle);
    // console.log(circle.offsetLeft);
    // console.log(e.screenX);
    this.progData.screenX = e.screenX;
    this.progData.left = circle.offsetLeft;
    this.progData.progNum = (circle.offsetLeft + 14) / 494;
    // console.log(this.progData.progNum);
    // let
    // window.addEventListener('')
    // 最小值 是-14 最大值是480 进度条的总值是494
  };
  handleCirclemouseout = () => {
    console.log('鼠标移出浏览器界面');
    // body.removeEventListener('mousemove', _this.handleBodyMousemove)
    // body.removeEventListener('mouseup', _this.handleCirclemouseup)
    // body.removeEventListener('mouseout', _this.handleCirclemouseout)
  };
  handleCirclemouseup = () => {
    // 把移动的事件删除了
    // console.log(this);
    // 把事件删除了
    body.removeEventListener('mousemove', _this.handleBodyMousemove);
    body.removeEventListener('mouseup', _this.handleCirclemouseup);
    body.removeEventListener('mouseout', _this.handleCirclemouseout);

    console.log('鼠标松开');
  };
  // ^ 点击圆环后的鼠标移动事件
  handleBodyMousemove = e => {
    // console.log();
    let bar3Right = this.state.bar3Right - (e.screenX - this.progData.screenX);
    this.progData.screenX = e.screenX;
    if (bar3Right < 0) {
      bar3Right = 0;
    }
    if (bar3Right > 494) {
      bar3Right = 494;
    }
    console.log(bar3Right);
    this.setState({
      bar3Right,
    });
  };
  render() {
    return (
      <PlayerControlUi
        handelCircleClick={this.handelCircleClick}
        handleCircleMouseDown={this.handleCircleMouseDown}
        handleCirclemouseup={this.handleCirclemouseup}
        bar3Right={this.state.bar3Right}
      />
    );
  }
}

export default PlayerControl;
