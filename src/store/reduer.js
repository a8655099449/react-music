/*
 * @Author: your name
 * @Date: 2020-12-21 10:18:51
 * @LastEditTime: 2020-12-21 10:27:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\store\reduer.js
 */

const defaultState = {
  testData: {
    name: 'zhangsan',
    age: '19',
  },
};

export default (state = defaultState, action) => {
  return { ...state };
};
