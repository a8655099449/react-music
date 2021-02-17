import React, { useContext } from 'react';
import styles from '../search.less';
import Context from '@/context';
import Image from '@/components/Image/Image';
import { goSinger } from '../../../assets/js/linkto';

export default props => {
  let { result } = useContext(Context);
  let list = [];
  if (result && result.artists) {
    list = result.artists;
  }
  return (
    <div className={`${styles['singer']}`}>
      {list.map((item, index) => (
        <SingerItem key={index} item={item} />
      ))}
    </div>
  );
};

const SingerItem = props => {
  let { item } = props;
  return (
    <div
      className={`${styles['singer-item']} click`}
      title={item.name}
      onClick={() => goSinger(item.id)}
    >
      <div>
        <Image src={`${item.picUrl}?param=130y130`} />
        <div className={`${styles['name']}`}>
          <div className={`${styles['text-row-1']}`}>{item.name}</div>
        </div>
      </div>
    </div>
  );
};
