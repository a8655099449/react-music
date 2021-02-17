import React from 'react';
import styles from './MusicCalendar.less';
import ItemTitle from '../itemTitle';
import Image from '@/components/Image/Image';
import Loading from '@/components/loading/Loading2';

const loadContent = (
  <div style={{ height: '400px' }}>
    <Loading />
  </div>
);

export default props => {
  let { calendars } = props;
  if (!calendars) {
    return loadContent;
  }
  let { creatives } = calendars;
  return (
    <div>
      <ItemTitle
        title={`音乐日历`}
        type={1}
        icon="icon-tianchongxing-"
      ></ItemTitle>
      {creatives.map((item, index) => (
        <CalendarsItem item={item} key={index} />
      ))}
    </div>
  );
};

const CalendarsItem = props => {
  let { item } = props;
  let labeText = item.resources[0].uiElement.labelTexts ? (
    <span>{item.resources[0].uiElement.labelTexts[0]}</span>
  ) : null;
  return (
    <div className={`${styles['calendars-item']}`}>
      <div className={`${styles['left-content']}`}>
        <div>今天 {labeText}</div>
        <div className={`${styles['classname']} text-row-1`}>
          {item.resources[0].uiElement.mainTitle.title}
        </div>
      </div>
      <div className={`${styles['rigth-content']}`}>
        <Image
          src={`${item.resources[0].uiElement.image.imageUrl}?param=60y60`}
        />
      </div>
    </div>
  );
};
