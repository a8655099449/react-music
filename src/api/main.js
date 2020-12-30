/*
 * @Author: your name
 * @Date: 2020-12-08 15:31:42
 * @LastEditTime: 2020-12-16 20:43:20
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \react-umi\src\api\main.js
 */
import axios from 'axios';
const baseURL = 'http://121.37.195.155:3000';

function request(config) {
  const instance = axios.create({
    // 公用的网络请求路径
    baseURL,
    // 网络请求时间超时会自动断开
    timeout: 5000,
  });

  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {},
  );

  return instance(config);
}

export default request;
