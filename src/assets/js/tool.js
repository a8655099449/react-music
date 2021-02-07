import { Modal } from 'antd';
const { confirm } = Modal;

import event from './event';

import { SHOW_LOGIN, ADD_PLAY_LIST, ADD_NEW_SONG } from '../../config/eventKey';

// ^ 转换歌曲时长函数

export function parseSongTime(time) {
  // 计算分钟
  // @ts-ignore
  let min = parseInt(time / 60);
  min = min < 10 ? '0' + min : min;
  let s = parseInt(time - min * 60);
  s = s < 10 ? '0' + s : s;

  return min + ':' + s;
}

const modalDetfaultParams = {
  title: '默认标题',
  content: '默认内容',
  okText: '确定',
  cancelText: '取消',
};

export function showModal(params) {
  for (const key in modalDetfaultParams) {
    if (!params[key]) {
      params[key] = modalDetfaultParams[key];
    }
  }

  return new Promise((reslove, reject) => {
    confirm({
      ...params,
      onOk() {
        reslove();
      },
      onCancel() {
        reject();
      },
    });
  });
}
// ^ 隐藏页面滚动条函数

export function disbledBodyScroll() {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = '0px';
  document.body.style.width = '100%';
}

// ^ 显示页面滚动条函数

export function bodyScroll() {
  document.documentElement.style.overflowY = 'scroll';
  document.body.style.position = 'static';
}

// ^ 单位转换函数(存)

export function parsePlayCount(num) {
  num = parseInt(num);

  if (num <= 10000) {
    return num;
  }

  if (num > 10000 && num < 99999999) {
    return parseInt(num / 10000) + ' 万';
  }
  return parseInt(num / 100000000) + ' 亿';
}
// ^ 本地数据缓存函数(存)

export function setLocalData(key, data) {
  let time = Date.parse(new Date()) / 1000;
  // console.log(key, data);
  let localdata = {
    data,
    time,
  };
  window.localStorage.setItem(key, JSON.stringify(localdata));
}
// ^ 本地数据缓存函数(取)

export function getLocalData(key, time = 0) {
  let nowtime = Date.parse(new Date()) / 1000;
  let data = JSON.parse(window.localStorage.getItem(key));

  if ((data && time && nowtime - time < data.time) || (data && time === 0)) {
    return data.data;
  }
  return false;
}
// ^ 提取歌词函数

export function parseLaric(str) {
  let lrcArr = str.split(/\n/);

  for (let i = 0; i < lrcArr.length; i++) {
    let time = '';
    let content = '';
    let select = false;
    if (lrcArr[i]) {
      time = lrcArr[i].split(']')[0].split('[')[1];

      time = time.slice(0, 5);

      content = lrcArr[i].split(']')[1];
    }
    lrcArr[i] = { time, content, select };
  }
  return lrcArr;
}

// ^ 时间转换函数
export function formatTime(date, fmt) {
  if (!date) return 'is not time';
  // 判断date是不是时间戳
  if (typeof date == 'number') {
    date = new Date(date);
  }
  //获取年份
  if (/(y+)/.test(fmt)) {
    let dateY = date.getFullYear() + '';
    //RegExp.$1 在判断中出现过，且是括号括起来的，所以 RegExp.$1 就是 "yyyy"
    fmt = fmt.replace(RegExp.$1, dateY.substr(4 - RegExp.$1.length));
  }

  //获取其他
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? str : ('00' + str).substr(str.length),
        //
      );
    }
  }
  return fmt;
}

// ^ 生成数组

/**
 *
 * @param {*} count  整数
 */
export function createArr(count) {
  if (isNaN(count)) return [];
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }

  return arr;
}

// ^ 防抖函数
export const debounce = (fn, time) => {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
};

// ^ 展示登录窗口
export const showLogin = () => event.emit(SHOW_LOGIN);

/**
 * ^ 添加整个歌单至播放器
 * @param {*} list array
 * 
 * {
    singerName, 
    songId,
    songName,
    dt,
  }
 * 
 * 
 */

export const addPlayList = list => event.emit(ADD_PLAY_LIST, list);

/**
 * ^ 添加一首歌到播放器
 * @param {*} item Object 歌曲信息
 */
export const playNewSong = (item, type = 'playSong') =>
  event.emit(ADD_NEW_SONG, item, type);

export const scrollTopTo = top => {
  window.scrollTo({
    behavior: 'smooth',
    top: top,
  });
};
