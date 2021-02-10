import playList from './searchContent/playList';
import song from './searchContent/song';
import singer from './searchContent/singer';
import albums from './searchContent/albums';
import mv from './searchContent/mv';
import lyrics from './searchContent/lyrics.jsx';
import dj from './searchContent/dj';
import user from './searchContent/user';

export const nav = [
  {
    name: '单曲',
    content: song,
    type: 1,
    countKey: 'songCount',
  },
  {
    name: '歌手',
    type: 100,
    content: singer,
    countKey: 'artistCount',
  },
  {
    name: '专辑',
    type: 10,
    content: albums,
    countKey: 'albumCount',
  },
  {
    name: '视频',
    type: 1004,
    content: mv,
    countKey: 'mvCount',
  },
  {
    name: '歌词',
    type: 1006,
    content: lyrics,
    countKey: 'songCount',
  },
  {
    name: '歌单',
    content: playList,
    type: 1000,
    countKey: 'playlistCount',
  },
  {
    name: '声音主播',
    type: 1009,
    content: dj,
    countKey: 'djRadiosCount',
  },
  {
    name: '用户',
    content: user,
    countKey: 'userprofileCount',
    type: 1002,
  },
];
