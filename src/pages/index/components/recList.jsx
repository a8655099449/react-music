import React from 'react';
import ItemTitle from './itemTitle';

import ListItem from '@/components/listItem/listItem';
import { connect } from 'react-redux';
import styles from './recList.less';
// 推荐歌单
class RecList extends React.Component {
  render() {
    // console.log(this.props);
    let { recData } = this.props;
    let list = recData.creatives.map((item, index) => {
      let imgSrc = item.uiElement.image.imageUrl;
      let titleName = item.uiElement.mainTitle.title;
      let playCount = item.resources[0].resourceExtInfo.playCount;
      // console.log(playCount);
      return (
        <ListItem
          className={`${styles['list-item']}`}
          key={index}
          imgSrc={imgSrc}
          titleName={titleName}
          playCount={playCount}
        />
      );
    });

    // console.log(this.props);
    return (
      <div>
        <ItemTitle title={recData.uiElement.subTitle.title} />
        <div className={`${styles['list-warp']}`}>{list}</div>
      </div>
    );
  }
}
const stateToProps = state => ({
  value: state.testData,
});

export default connect(stateToProps, null)(RecList);
