/*
 * @Author: your name
 * @Date: 2020-12-21 10:17:58
 * @LastEditTime: 2021-01-04 14:53:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\store\index.js
 */

import { createStore } from 'redux';
import reduer from './reduer';

const store = createStore(reduer);

export default store;
