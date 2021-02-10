import React, { useState, useEffect, useContext } from 'react';
import { history } from 'umi';

import styles from './search.less';
import Nothing from '../../components/noting/nothing';
import { nav } from './data';
import Context from '@/context';

import { searchForType } from '@/api/api-search';

import { SEARCH_KEYWORDS } from '@/config/localKey';

import Pagination from '@/components/Pagination/Pagination.jsx';
import Loading from '@/components/loading/Loading2';

import { scrollTopTo } from '@/assets/js/tool';

const loadContent = () => {
  return (
    <div style={{ height: '600px' }}>
      <Loading text="努力搜索中..." />
    </div>
  );
};

const checkType = type => {};

export default props => {
  let params = props.location.query;
  let type = parseInt(params.type) || 0;

  if (typeof type != 'number' || isNaN(type) || type >= nav.length) {
    type = 0;
  }
  // let { search } = props;
  const [keywords, setkeywords] = useState(
    params.keyword || localStorage.getItem(SEARCH_KEYWORDS) || '',
  );
  const [navActiveIndex, setnavActiveIndex] = useState(type);
  const [offset, setOffset] = useState(0);
  const limit = 30;
  const [result, setResult] = useState(null);
  const [pageSize, setpageSize] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const [hintText, sethintText] = useState('请输入搜索关键字');

  // ^ 按键发送的关键字
  const hanldeKeyup = e => {
    let keyword = e.target.value;
    setkeywords(keyword);
    localStorage.setItem(SEARCH_KEYWORDS, keyword);
  };

  // ^ 点击了搜索按钮
  const hanleBtnClick = async () => {
    let keyword = keywords.trim();
    let type = nav[navActiveIndex].type;
    setisLoading(true);
    if (keyword.length == 0) {
      setResult(null);
      sethintText(`请输入搜索关键字`);
      setpageSize(0);
      setTimeout(() => {
        setisLoading(false);
      }, 500);
      return;
    }
    let res = await searchForType({
      keywords: keyword,
      type,
      offset,
      limit,
    });
    setTimeout(() => {
      setisLoading(false);
    }, 500);
    if (res.code !== 200) return;
    let count;
    if (nav[navActiveIndex].countKey) {
      count = res.result[nav[navActiveIndex].countKey];
      setpageSize(Math.ceil(count / limit));
    } else {
      return setpageSize(0);
    }
    // console.log(nav[navActiveIndex].countKey);
    if (count === 0 || !count) {
      sethintText(
        `没有搜索到与 【 <b>${keyword}</b> 】 相关的的${nav[navActiveIndex].name}`,
      );
      return setResult(null);
    }

    console.log(res.result);
    setResult(res.result);
  };

  const changePage = params => {
    if (params - 1 == offset) return;
    scrollTopTo(0);
    setOffset(params - 1);
  };
  let value = {
    keywords: keywords,
    navActiveIndex: navActiveIndex,
    result: result,
    hintText: hintText,

    hanldeKeyup: hanldeKeyup,
    setnavActiveIndex: setnavActiveIndex,
    hanleBtnClick: hanleBtnClick,
  };

  let SearchContent = nav[navActiveIndex].content || Nothing;
  if (!result) {
    SearchContent = Nothing;
  }

  if (isLoading) {
    SearchContent = loadContent;
  }
  // ^ 监听路由变化
  const routerChange = (location, action) => {
    if (location.pathname === '/search') {
      let type = parseInt(location.query.type);
      if (typeof type != 'number' || isNaN(type) || type >= nav.length) return;
      setnavActiveIndex(type);
      setOffset(0);
    }
  };
  useEffect(() => {
    hanleBtnClick();
  }, [navActiveIndex, offset]);
  useEffect(() => {
    // ^ 监听路由变化
    history.listen(routerChange);
  }, []);

  return (
    <div className={`${styles['content-box']} content-box page-content`}>
      <Context.Provider value={value}>
        <SearchInp />
        <NavBar />

        <SearchContent hintText={hintText} />
        <Pagination
          seletPage={offset + 1}
          pageSize={pageSize}
          changePage={changePage}
        />
      </Context.Provider>
    </div>
  );
};

const SearchInp = () => {
  let { keywords, hanldeKeyup, hanleBtnClick } = useContext(Context);
  return (
    <div className={`${styles['searchinp-wrap']}`}>
      <div className={`${styles['inp-box']}`}>
        <input
          type="search"
          value={keywords}
          placeholder="请输入搜索内容"
          onChange={hanldeKeyup}
          onKeyDown={e => {
            if (e.key == 'Enter') hanleBtnClick();
          }}
        />
        <div
          className={`${styles['btn']} btn btn-gray iconfont  icon-sousuo1 click`}
          onClick={hanleBtnClick}
        ></div>
      </div>
    </div>
  );
};

const NavBar = () => {
  let { navActiveIndex, setnavActiveIndex } = useContext(Context);
  const changNav = index => {
    history.replace({
      pathname: '/search',
      query: {
        type: index,
      },
    });
  };

  return (
    <div className={`${styles['nav-bar']}`}>
      {nav.map((item, index) => {
        let className = '';

        if (navActiveIndex == index) {
          className = styles['active'];
        }

        return (
          <div
            key={index}
            className={`${styles['nav-item']} ${className}`}
            onClick={() => changNav(index)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
