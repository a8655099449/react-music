/*
 * @Author: your name
 * @Date: 2020-12-29 11:54:49
 * @LastEditTime: 2021-01-05 11:25:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\assets\js\tool.js
 */

import { Modal } from 'antd';
const { confirm } = Modal;

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

export function disbledBodyScroll() {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = '0px';
  document.body.style.width = '100%';
}

export function bodyScroll() {
  document.documentElement.style.overflowY = 'scroll';
  document.body.style.position = 'static';
}
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
