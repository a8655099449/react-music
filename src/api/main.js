/*
 * @Author: your name
 * @Date: 2020-12-08 15:31:42
 * @LastEditTime: 2021-01-05 16:30:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-umi\src\api\main.js
 */
import axios from 'axios';
const baseURL = 'http://121.37.195.155:3000';
import { COOKIE } from '@/config/localKey';

function request(config) {
  if (config.iscookie) {
    let cookiestr = `cookie=${localStorage.getItem(COOKIE)}`;
    let flag = /=/.test(config.url) ? '&' : '?';
    config.url += `${flag}${cookiestr}`;
  }
  const instance = axios.create({
    // 公用的网络请求路径
    baseURL,
    // 网络请求时间超时会自动断开
    timeout: 5000,
    withCredentials: false,
    // withCredentials: true,
  });
  // config.withCredentials = true;
  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      throw err;
    },
  );
  // axios.interceptors.response.use((response) => {
  //   return response;

  //   }, function (error) {
  //   if (401 === error.response.status) {
  //   window.location = '/login';

  //   } else {
  //   return Promise.reject(error);

  //   }

  //   });

  return instance(config);
}

export default request;
