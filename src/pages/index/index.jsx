import React from 'react';
import styles from './index.less';
import TopNav from './components/topNav'
import Banner from './components/banner'
import { getHomeData } from '@/api/api-home'
import ItemTitle from './components/itemTitle'

// 推荐歌单
import RecList from './components/recList';

class Index extends React.Component {

  state = {
    banners: [],
    contentList: [],
    recListData:null
  }
  componentDidMount() {
    this._getHomeData()
  }
  async _getHomeData() {
    let homeData = JSON.parse(localStorage.getItem('homeData'))
    // let banners = JSON.parse(localStorage.getItem('banners'))


    if (!homeData) {
      let res = await getHomeData()
      homeData = res.data.blocks
      localStorage.setItem('homeData', JSON.stringify(homeData))

      // banners = res.data.blocks[0].extInfo.banners
      // localStorage.setItem('banners', JSON.stringify(banners))
    }
    // console.log(homeData);
    let banners = homeData[0].extInfo.banners
    let recListData = homeData.find(i=>i.blockCode === 'HOMEPAGE_BLOCK_PLAYLIST_RCMD')
    console.log(recListData);
    let contentList = homeData.filter(i => i.uiElement)
    console.log(contentList);
    // let item1 = 
    this.setState({
      banners,
      contentList,
      recListData
    })
  }

  render() {
    
    let contentList = this.state.contentList.map((item, index) => {
      return(
        <ItemTitle title={item.uiElement} key={index} />
      )
    })
    let recListDom = this.state.recListData ? <RecList recData={this.state.recListData}  />:null
    return (
      <div>
        <TopNav />
        <Banner banners={this.state.banners} />
        <div className={`${styles['content-main']} content-box`}>
          {recListDom}
          {contentList}
        </div>
      </div>
    )
  }
}


export default Index
