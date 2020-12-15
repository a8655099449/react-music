import React from 'react'
import { Carousel } from 'antd';
import styles from './banner.less';

class Banner extends React.Component {
  state={
    activeIndex:0
  }
  next = () => {
    this.refs.banner.next()
  }
  prov = () => {
    this.refs.banner.prev()
  }
  beforeChange = (from,to) => {
    // console.log(from,to);
    this.setState({
      activeIndex:to
    })
  }
  render() {
    let banners = this.props.banners
    // console.log(banners);
    let bannerList = banners.map((item, index) => (
      <div key={index}>
        <img src={item.pic} alt="轮播图篇" />
      </div>
    ))
    let bgStr = banners[this.state.activeIndex] ? banners[this.state.activeIndex].pic : ''
    let boxStyle = {
      backgroundImage: `url(${bgStr})` 
    }

    return (
      <div className={styles['banner-warp']}>
        <div style={boxStyle} className={`${styles['bannerBg']} fill`}
        >
        </div>
        <div className={styles['main-banner'] + ' content-box'}>
          <div className={`${styles['next-item']} iconfont icon-you click`}
            onClick={this.prov}
          ></div>
          <div className={`${styles['next-item']} iconfont icon-you click ${styles['prov']}`}
            onClick={this.next}
          ></div>
          <Carousel
            autoplay
            ref="banner"
            beforeChange={this.beforeChange}
          >
            {bannerList}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Banner


