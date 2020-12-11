/*
 * @Author: your name
 * @Date: 2020-12-11 10:02:03
 * @LastEditTime: 2020-12-11 10:11:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\config\router.js
 */


const routers =[
  {
    exact: true,
    path: '/',
    component: '@/pages/index/index',
    title: '网易云音乐',
  },
  {
    exact: true,
    path: '/profile',
    component: '@/pages/profile/profile',
    title: '我的音乐',
  },
]

export default routers