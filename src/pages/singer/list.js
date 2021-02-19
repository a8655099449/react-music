import allAlbum from './components/allAlbum';
import hot from './components/hot';
import mv from './components/mv';
import desc from './components/desc';

export default [
  {
    name: '热门作品',
    content: hot,
  },
  {
    name: '所有专辑',
    content: allAlbum,
  },
  {
    name: '相关mv',
    content: mv,
  },
  {
    name: '艺人介绍',
    content: desc,
  },
];
