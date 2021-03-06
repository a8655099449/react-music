import React from 'react';
import { Carousel } from 'antd';
import styles from './banner.less';
import { history } from 'umi';
import { goPlayList, goAlbum } from '../../../assets/js/linkto';

class Banner extends React.Component {
  state = {
    activeIndex: 0,
  };
  next = () => {
    this.refs.banner.next();
  };
  prov = () => {
    this.refs.banner.prev();
  };
  beforeChange = (from, to) => {
    this.setState({
      activeIndex: to,
    });
  };
  bannerClick = item => {
    let type = item.targetType;
    console.log(item);
    switch (type) {
      case 1:
        history.push(`/songdetail?songId=${item.song.id}`);
        break;
      case 10:
        goAlbum(item.targetId);
        break;
      case 3000:
        window.open(item.url, 'block');
        break;
      case 1000:
        goPlayList(item.targetId);
        break;
    }
  };
  render() {
    let banners = this.props.banners;

    let bannerList = banners.map((item, index) => (
      <div
        key={index}
        onClick={() => {
          this.bannerClick(item);
        }}
      >
        <img src={item.pic} alt="轮播图篇" />
      </div>
    ));
    let bgStr = banners[this.state.activeIndex]
      ? banners[this.state.activeIndex].pic
      : '';
    let boxStyle = {
      backgroundImage: `url(${bgStr})`,
    };

    return (
      <div className={styles['banner-warp']}>
        <div style={boxStyle} className={`${styles['bannerBg']} fill`}></div>
        <div className={styles['main-banner'] + ' content-box'}>
          <div
            className={`${styles['next-item']} iconfont icon-you click`}
            onClick={this.prov}
          ></div>
          <div
            className={`${styles['next-item']} iconfont icon-you click ${styles['prov']}`}
            onClick={this.next}
          ></div>
          <Carousel autoplay ref="banner" beforeChange={this.beforeChange}>
            {bannerList}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Banner;
