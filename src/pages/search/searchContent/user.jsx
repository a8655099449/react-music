import React, { useContext } from 'react';
import styles from '../search.less';
import Context from '@/context';
import { blodKeyword, GenderIcon } from '@/assets/js/tool';
import Image from '@/components/Image/Image';

import { goUserDatail } from '@/assets/js/linkto';

export default () => {
  let { result, keywords } = useContext(Context);
  let list = [];
  if (result && result.userprofiles && Array.isArray(result.userprofiles)) {
    list = result.userprofiles;
  }
  return (
    <div className={``}>
      {list.map((item, index) => {
        item.nickname = blodKeyword(keywords, item.nickname);
        return <Item key={index} item={item} />;
      })}
    </div>
  );
};
const Item = props => {
  let { item } = props;
  return (
    <div className={`${styles['user-item']}`}>
      <div
        className={`${styles['cell']} click`}
        onClick={() => {
          goUserDatail(item.userId);
        }}
      >
        <Image src={`${item.avatarUrl}?param=100y100`} />
      </div>
      <div className={`${styles['cell']}`}>
        <div
          className={`${styles['nickname']} text-row-1 underline`}
          onClick={() => {
            goUserDatail(item.userId);
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: item.nickname }}></span>
          <GenderIcon type={item.gender} />
        </div>
        <div className={`${styles['desc']} text-row-1`}>{item.signature}</div>
      </div>
      <div className={`${styles['cell']} btn btn-gray`}>
        <i className={` icon-jiahaocu iconfont`}></i>
        关注
      </div>
      <div className={`${styles['cell']}`}>歌单 : {item.playlistCount}</div>
      <div className={`${styles['cell']}`}>粉丝 : {item.followeds}</div>
    </div>
  );
};
