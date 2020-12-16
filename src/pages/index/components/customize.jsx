// 私人定制
import ItemTitle from './itemTitle';
import React from 'react';
import styles from './customize.less';
import Swiper from 'swiper';

class Customize extends React.Component {
  render() {
    setTimeout(() => {
      new Swiper('.' + styles['swiper-container'], {
        slidesPerView: 'auto',
        // spaceBetween: 20,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      });
    }, 100);
    // console.log(t  his.props)
    let baseData = this.props.baseData;
    if (!baseData) {
      return null;
    }
    let listItem = baseData.creatives[0];
    console.log(baseData);
    let title =
      baseData.uiElement.mainTitle.title +
      ' / ' +
      baseData.uiElement.subTitle.title;
    let imgSrc =
      'http://p1.music.126.net/hFEUlWo8k3ywaB6pnaD-WQ==/109951164192344939.jpg';
    let bigList = baseData.creatives;

    let listDom = bigList.map((item, index) => {
      // console.log(item);
      return (
        <div className={`${styles['content']} swiper-slide`} key={index}>
          {item.resources.map((item2, index2) => {
            // console.log(item2);
            let songName = item2.resourceExtInfo.songData.name;
            let artists = item2.resourceExtInfo.artists[0].name;
            // let desc = item2.resourceExtInfo.commentSimpleData.content || '啊哈哈'
            let desc = item2.uiElement.subTitle
              ? item2.uiElement.subTitle.title
              : item2.uiElement.mainTitle.title;
            // console.log(item2.uiElement.subTitle);
            console.log(item2.uiElement.mainTitle.title);
            // console.log(item2.resourceExtInfo.commentSimpleData);
            return (
              <div className={`${styles['list-item']}`} key={index2}>
                <div className={`${styles['img-warp']}`}>
                  <img src={item2.uiElement.image.imageUrl} alt="" />
                </div>
                <div className={`${styles['desc']}`}>
                  <div className={`${styles['song-title']}`}>
                    {songName} <span>- {artists}</span>
                  </div>
                  <div className={`${styles['desc-bottom']} text-row-1`}>
                    {desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });

    return (
      <div className={`${styles['customize']}`}>
        <ItemTitle title={title} type={1} />
        <div className={`${styles['swiper-container']}`}>
          <div className={` swiper-wrapper ${styles['swiper-wrapper']}`}>
            {listDom}{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default Customize;
