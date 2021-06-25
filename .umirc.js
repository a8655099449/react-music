import { defineConfig } from 'umi';
import routers from './src/config/router';

export default {
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/loading/Loading3.jsx',
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
  outputPath: '../static-music2',
  targets: {
    ie: 11,
  },
  history: {
    type: 'hash',
  },

  // publicPath:'/src/assets/'
};
