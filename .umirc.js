/*
 * @Author: your name
 * @Date: 2020-12-10 10:00:22
 * @LastEditTime: 2020-12-11 14:14:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\.umirc.ts
 */
import { defineConfig } from 'umi';
import routers from './src/config/router'


export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport:{
    
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: routers,
    },

    { component: '@/pages/404' },
  ],
});
