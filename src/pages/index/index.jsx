import React from 'react';
import styles from './index.less';
import TopNav from './components/topNav';
import Banner from './components/banner';
import Customize from './components/customize';
import { getHomeData } from '@/api/api-home';
import { getNewDVD } from '@/api/api-music';
import ItemTitle from './components/itemTitle';
import LoginBar from './components/login-bar/loginBar';
import NewDVD from './components/newDVD/newDVD';
import { NEW_DVDS, HOME_DATA } from '@/config/localKey';

import { setLocalData, getLocalData } from '@/assets/js/tool';

// console.log(loginBar);
// 推荐歌单
import RecList from './components/recList';

import { connect } from 'react-redux';

class Index extends React.Component {
  saveTime = 60 * 24 * 60;
  // saveTime = 1
  state = {
    banners: [],
    contentList: [],
    recListData: null,
    newDVDs: [],
    // recListData: [],
    // customizeData: [],
    // sceneListData: [],
  };
  componentDidMount() {
    this._getHomeData();
    this._getNewDVD();
  }
  async _getNewDVD() {
    // console.log(getNewDVD);
    // return
    let newDVDs = getLocalData(NEW_DVDS, this.saveTime) || [];
    if (newDVDs.length === 0) {
      let res = await getNewDVD();
      newDVDs = res.weekData;
      setLocalData(NEW_DVDS, newDVDs);
    }

    this.setState({ newDVDs });
  }

  async _getHomeData() {
    // let storeData = JSON.parse(localStorage.getItem(HOME_DATA));
    // let nowTime = Date.parse(new Date()) / 1000;
    let homeData = getLocalData(HOME_DATA, this.saveTime) || [];
    // console.log(nowTime - (storeData.time + this.saveTime));
    if (homeData.length == 0) {
      let res = await getHomeData();
      homeData = res.data.blocks;
      setLocalData(HOME_DATA, homeData);
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
            <NewDVD newDVDs={this.state.newDVDs} />

            {/* {contentList} */}
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
