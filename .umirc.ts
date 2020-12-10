/*
 * @Author: your name
 * @Date: 2020-12-10 10:00:22
 * @LastEditTime: 2020-12-10 15:36:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\.umirc.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          exact: true, 
          path: '/',
          component: '@/pages/index/index',
        },
       
      ],
    },
    { path: '/', component: '@/pages/index/index', title: '网易云音乐' },
    // { component: '@/pages/404' },
   
  ],
});
