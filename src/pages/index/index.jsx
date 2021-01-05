import React from 'react';
import styles from './index.less';
import TopNav from './components/topNav';
import Banner from './components/banner';
import Customize from './components/customize';
import { getHomeData } from '@/api/api-home';
import ItemTitle from './components/itemTitle';
import LoginBar from './components/login-bar/loginBar';

// console.log(loginBar);
// 推荐歌单
import RecList from './components/recList';

import { connect } from 'react-redux';

class Index extends React.Component {
  saveTime = 24 * 60 * 60;
  // saveTime = 1
  state = {
    banners: [],
    contentList: [],
    recListData: null,
  };
  componentDidMount() {
    this._getHomeData();
  }
  async _getHomeData() {
    let storeData = JSON.parse(localStorage.getItem('homeData'));
    let nowTime = Date.parse(new Date()) / 1000;
    let homeData;
    // console.log(nowTime - (storeData.time + this.saveTime));
    if (storeData && nowTime - (storeData.time + this.saveTime) < 0) {
      homeData = storeData.homeData;
    } else {
      console.log('准备发送请求');
      let res = await getHomeData();
      homeData = res.data.blocks;
      let storeData = {
        homeData,
        time: nowTime,
      };
      localStorage.setItem('homeData', JSON.stringify(storeData));
    }

    // console.log(homeData);
    let banners = homeData[0].extInfo.banners;
    let recListData = homeData.find(
      i => i.blockCode === 'HOMEPAGE_BLOCK_PLAYLIST_RCMD',
    );
    let customizeData = homeData.find(
      i => i.blockCode === 'HOMEPAGE_BLOCK_STYLE_RCMD',
    );
    let sceneListData = homeData.find(
      i => i.blockCode === 'HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST',
    );

    let contentList = homeData.filter(i => i.uiElement);

    this.setState({
      banners,
      contentList,
      recListData,
      customizeData,
      sceneListData,
    });
  }

  render() {
    let { userInfo, isLogin } = this.props;
    // console.log({ userInfo, isLogin }, 'index');
    let contentList = this.state.contentList.map((item, index) => {
      return <ItemTitle title={item.uiElement} key={index} />;
    });
    let recListDom = this.state.recListData ? (
      <RecList recData={this.state.recListData} />
    ) : null;
    let sceneListData = this.state.sceneListData ? (
      <RecList recData={this.state.sceneListData} />
    ) : null;
    return (
      <div>
        <TopNav />
        <Banner banners={this.state.banners} />
        <div className={`${styles['content-main']} content-box`}>
          <div className={`${styles['left-contet']}`}>
            {recListDom}
            {sceneListData}
            {contentList}
          </div>
          <div className={`${styles['right-content']}`}>
            <LoginBar userInfo={userInfo} isLogin={isLogin} />
            <Customize baseData={this.state.customizeData} />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispacth) {
  return {
    // setUserData: (data) => {
    //   dispacth({
    //     type: 'setUserInfo',
    //     data
    //   })
    // },
    // logout: () => {
    //   dispacth({
    //     type: 'logout',
    //   })
    // },
  };
}
function mapStateToProps(state) {
  return {
    userInfo: state.userData,
    isLogin: state.isLogin,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
