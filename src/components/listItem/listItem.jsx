import React from 'react';
// 歌单小单元
import styles from './listItem.less';
import { history } from 'umi';
import { parsePlayCount } from '@/assets/js/tool';

class ListItem extends React.Component {
  goPage = () => {
    history.push({
      pathname: '/playlist',
      query: {
        id: 'b',
      },
    });
  };

  render() {
    let clsName = this.props.className || '';
    let imgSrc =
      this.props.imgSrc ||
      'http://p1.music.126.net/i_JX_JOoE6VH_jg0vRsyhg==/109951165159078349.jpg?param=140y140';
    let titleName = this.props.titleName || '默认标题';
    let playCount = parsePlayCount(this.props.playCount);

    return (
      <div
        className={`${styles['list-item']} ${clsName}`}
        onClick={this.goPage}
      >
        <div className={`${styles['img-warp']}`}>
          <img src={imgSrc} alt="" />
          <div className={`${styles['img-buttom-bar']}`}>
            <div>
              <i className={`iconfont icon-erji`}>
                {' '}
                <span>{playCount}</span>{' '}
              </i>{' '}
            </div>
            <div>
              <i className={`iconfont icon-ziyuan`}></i>{' '}
            </div>
          </div>
        </div>
        <p className={`${styles['name-text']} text-row-2`}>{titleName}</p>
      </div>
    );
  }
}

export default ListItem;
