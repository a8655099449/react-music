import React from 'react';
// 歌单小单元
import styles from './listItem.less';
import { history } from 'umi';
import { parsePlayCount } from '@/assets/js/tool';
import Image from '@/components/Image/Image';

const goPage = id => {
  history.push({
    pathname: '/playlist',
    query: {
      id,
    },
  });
};

/**
 *  coverImgUrl: item.uiElement.image.imageUrl,
 *  name: item.uiElement.mainTitle.title,
 *  playCount: item.resources[0].resourceExtInfo.playCount,
 *  id: item.creativeId,
 *
 */
export default props => {
  let { item } = props;

  item.playCount = parsePlayCount(item.playCount);

  return (
    <div
      className={`${styles['list-item']}`}
      onClick={() => {
        goPage(item.id);
      }}
    >
      <div className={`${styles['img-warp']}`}>
        <Image src={item.coverImgUrl + '?param=140y140'} />
        <div className={`${styles['img-buttom-bar']}`}>
          <div>
            <i className={`iconfont icon-erji`}>
              {' '}
              <span>{item.playCount}</span>
            </i>
          </div>
          <div>
            <i className={`iconfont icon-ziyuan`}></i>
          </div>
        </div>
      </div>
      <p
        className={`${styles['name-text']} text-row-2`}
        dangerouslySetInnerHTML={{ __html: item.name }}
      ></p>
    </div>
  );
};
