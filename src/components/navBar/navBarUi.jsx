import React from 'react';
import styles from './navBar.less';
import MiniSearchBar from './MiniSearchBar';
import SideBar from './SideBar';
import { userList } from './data';

import WebSerachBar from './WebSerachBar';

export default props => {
  let {
    handelNavChange,
    navList,
    activeIndex,
    goHome,
    isLogin,
    userInfo,
    handleUserListCick,
    handleLoginClick,
    handleShowSideBar,
    handleChangeKeywords,
    sideBarShow,
    searchKeywords,
    searchContent,
  } = props;

  let navlistContent = navList.map((item, index) => {
    let className =
      index === activeIndex
        ? `${styles['list-item']} click ${styles['active']}`
        : styles['list-item'] + ' click';
    return (
      <div
        className={className}
        key={index}
        onClick={() => {
          handelNavChange(item, index);
        }}
      >
        {item.name}
      </div>
    );
  });

  let userDom;

  if (isLogin) {
    let { avatarUrl } = userInfo;
    userDom = (
      <div className={`${styles['user-data']}`}>
        <img src={avatarUrl} alt="头像" />

        <div className={`${styles['detail-list']}`}>
          {userList.map((item, index) => {
            let itemStyle = { backgroundPosition: item.postion };
            return (
              <div
                className={`${styles['list-item']}`}
                key={index}
                onClick={() => {
                  handleUserListCick(item);
                }}
              >
                <i className={`${styles['icon-bg']}`} style={itemStyle}></i>
                {item.tit}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    userDom = (
      <div className={`${styles['login-bar']}`} onClick={handleLoginClick}>
        登录
      </div>
    );
  }
  return (
    <div>
      <div className={`${styles['min-bar']}`}></div>
      <header className={styles['nav-bar']}>
        <div className={`${styles['min-content']}`}>
          <SideBar
            sideBarShow={sideBarShow}
            handleShowSideBar={handleShowSideBar}
            isLogin={isLogin}
            userInfo={userInfo}
            handleLoginClick={handleLoginClick}
            handelNavChange={handelNavChange}
          />
          <div className={`${styles['side-bar']}`}>
            <div className={`${styles['icon-box']}`}>
              <div
                className={`${styles['menu']} icon-caidan iconfont`}
                onClick={handleShowSideBar}
              ></div>
            </div>
          </div>
          <div className={`${styles['search-bar']}`}>
            <MiniSearchBar />
          </div>
        </div>

        <div className={styles['content']}>
          <div className={styles['log-box']} onClick={goHome}>
            <img src="//photo.tuituisoft.com/picgo/20210104113130.png" alt="" />
            不，是网抑云
          </div>
          <div className={styles['nav-list']}>{navlistContent}</div>
          <div className={`${styles['right-box']}`}>
            {/* 搜索框 */}
            <WebSerachBar
              handleChangeKeywords={handleChangeKeywords}
              searchKeywords={searchKeywords}
              searchContent={searchContent}
            />
            {/* 创作者中心 */}
            <div className={`${styles['create-box']}`}>创作者中心</div>
            {/* 用户信息  */}
            <div className={`${styles['user']}`}>{userDom}</div>
          </div>
        </div>
      </header>
    </div>
  );
};
