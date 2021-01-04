/*
 * @Author: your name
 * @Date: 2021-01-04 08:54:00
 * @LastEditTime: 2021-01-04 09:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\api\api-user.js
 */
import request from './main';

export function userLogin(data) {
  return request({
    url: '/login/cellphone',
    method: 'post',
    data,
  });
}
