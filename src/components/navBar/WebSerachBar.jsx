import React, { useState } from 'react';
import styles from './navBar.less';
import { message } from 'antd';
import { history } from 'umi';

const seachCategroy = {
  songs: {
    title: '单曲',
    icon: 'icon-yinle',
  },
  artists: {
    title: '歌手',
    icon: 'icon-yonghu1',
  },
  albums: {
    title: '专辑',
    icon: 'icon-changpian2',
  },
  playlists: {
    title: '歌单',
    icon: 'icon-gedan',
  },
};

export default props => {
  let { handleChangeKeywords, searchKeywords, searchContent } = props;
  let [contentShow, setContentShow] = useState(false);
  let contentShowStyle = {
    display: contentShow ? 'block' : 'none',
  };

  const getSearchContent = () => {
    let content = [];
    for (const key in seachCategroy) {
      if (searchContent && searchContent[key]) {
        content.push({
          item: seachCategroy[key],
          list: searchContent[key],
        });
      }
    }
    if (content.length == 0) return null;

    return content.map((item, index) => (
      <CategoryBar list={item.list} item={item.item} key={index} />
    ));
  };

  return (
    <div className={`${styles['search-box']}`}>
      <input
        type="input"
        placeholder="搜索框"
        value={searchKeywords}
        onChange={handleChangeKeywords}
        onFocus={() => setContentShow(true)}
        onBlur={() => {
          setTimeout(() => {
            setContentShow(false);
          }, 500);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            goSerachPage(searchKeywords, 0);
          }
        }}
      />

      <i
        className={`iconfont icon-sousuo click`}
        onClick={() => {
          goSerachPage(searchKeywords, 0);
        }}
      ></i>
      <div className={`${styles['serach-content']}`} style={contentShowStyle}>
        <header
          className={` click`}
          onClick={() => goSerachPage(searchKeywords, 7)}
        >
          搜索“{searchKeywords}”相关的用户
        </header>
        <div className={`${styles['conent-list']}`}>{getSearchContent()}</div>
      </div>
    </div>
  );
};

// ^ 点击搜索列表中的选项
const handleItemClick = (category, item) => {
  switch (category.title) {
    case '单曲':
      history.push({
        pathname: '/songdetail',
        query: {
          songId: item.id,
        },
      });
      break;

    case '歌手':
      message.info('准备前往歌曲页面');
      break;

    case '专辑':
      message.info('准备前往歌曲页面');
      break;

    case '歌单':
      // message.info('准备前往歌曲页面');
      history.push({
        pathname: '/playlist',
        query: {
          id: item.id,
        },
      });
      break;
  }
};

// ^ 前往搜索页面
const goSerachPage = (keyword, type) => {
  history.push({
    pathname: '/search',
    query: {
      keyword,
      type,
    },
  });
};
const CategoryBar = params => {
  let { item, list = [] } = params;

  return (
    <div className={`${styles['category-bar']}`}>
      <div className={`${styles['left-bar']}`}>
        <div>
          <i className={`iconfont ${item.icon}`}></i>
          {item.title}
        </div>
      </div>
      <div className={`${styles['right-bar']}`}>
        <ul>
          {list.map((cell, index) => {
            let desc = '';
            if (item.title == '单曲' && cell.artists) {
              desc = `- ${cell.artists[0].name}`;
            }

            return (
              <li
                className={`${styles['classname']} text-row-1 click`}
                key={index}
                title={cell.name + desc}
                onClick={() => handleItemClick(item, cell)}
              >
                {cell.name} <span>{desc}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
