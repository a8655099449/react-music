import React from 'react';
import ItemTitle from './itemTitle';
import ListItem from '@/components/listItem/listItem';
import styles from './recList.less';

export default props => {
  let { recData } = props;

  return (
    <div>
      <ItemTitle title={recData.uiElement.subTitle.title} />
      <div className={`${styles['list-warp']}`}>
        {recData.creatives.map((item, index) => {
          let listData = {
            coverImgUrl: item.uiElement.image.imageUrl,
            name: item.uiElement.mainTitle.title,
            playCount: item.resources[0].resourceExtInfo.playCount,
            id: item.creativeId,
          };

          return (
            <div className={`${styles['list-item']}`} key={index}>
              <ListItem item={listData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
