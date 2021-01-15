/*
 * @Author: your name
 * @Date: 2020-12-11 10:02:03
 * @LastEditTime: 2021-01-11 21:05:28
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \react-umi\src\config\router.js
 */

const routers = [
  {
    exact: true,
    path: '/',
    component: '@/pages/index/index',
    title: '网易云音乐',
  },
  {
    exact: true,
    path: '/home',
    component: '@/pages/index/index',
    title: '网易云音乐',
  },
  {
    exact: true,
    path: '/profile',
    component: '@/pages/profile/Profile',
    title: '我的音乐',
  },
  {
    exact: true,
    path: '/playlist',
    component: '@/pages/playList/playList',
    title: '歌单',
  },
  {
    exact: true,
    path: '/songdetail',
    component: '@/pages/songDetail/songDetail',
    title: '歌曲详情',
  },
];

export default routers;
