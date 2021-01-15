import React from 'react';
// 歌单小单元
import styles from './listItem.less';
import { history } from 'umi';
import { parsePlayCount } from '@/assets/js/tool';
import Image from '@/components/Image/Image';

class ListItem extends React.Component {
  goPage = id => {
    history.push({
      pathname: '/playlist',
      query: {
        id,
      },
    });
  };

  render() {
    let {
      listId = 3124642208,
      imgWidth,
      imgSrc,
      titleName = 'loading',
      className,
      playCount = 0,
    } = this.props;

    playCount = parsePlayCount(this.props.playCount);

    return (
      <div
        className={`${styles['list-item']} ${className}`}
        onClick={() => {
          this.goPage(listId);
        }}
      >
        <div className={`${styles['img-warp']}`}>
          {/* <img src={imgSrc} alt="" /> */}
          <Image src={imgSrc + '?param=140y140'} />
          <div className={`${styles['img-buttom-bar']}`}>
            <div>
              <i className={`iconfont icon-erji`}>
                {' '}
                <span>{playCount}</span>
              </i>
            </div>
            <div>
              <i className={`iconfont icon-ziyuan`}></i>
            </div>
          </div>
        </div>
        <p className={`${styles['name-text']} text-row-2`}>{titleName}</p>
      </div>
    );
  }
}

export default ListItem;
