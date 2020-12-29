/*
 * @Author: your name
 * @Date: 2020-12-29 11:54:49
 * @LastEditTime: 2020-12-29 14:15:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\assets\js\tool.js
 */

export function parseSongTime(time) {
  // 计算分钟
  // @ts-ignore
  let min = parseInt(time / 60);
  min = min < 10 ? '0' + min : min;
  let s = Math.ceil(time - min * 60);
  s = s < 10 ? '0' + s : s;

  return min + ':' + s;
}
