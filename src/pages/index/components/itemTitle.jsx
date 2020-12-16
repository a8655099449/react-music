import React from 'react';
import styles from './itemTitle.less';
class ItemTitle extends React.Component {
  render() {
    // console.log(this.props);

    let type = this.props.type || 0;
    let typeCls = 'type-' + type;
    let title = this.props.title;
    // console.log(title);
    let testData =
      typeof title == 'string'
        ? title
        : title.subTitle
        ? title.subTitle.title
        : '测试标题';
    // let title = '标题'
    // if (item.subTitle && item.subTitle.title) {
    //   title = item.subTitle.title
    // }
    // // let title = item.subTitle.title? item.subTitle.title :'没有标题'
    // console.log(item);

    return (
      <div className={`${styles['item-tit']} ${styles[typeCls]}`}>
        <div>
          <i className={`iconfont icon-changpian2`}></i>
          <div className={`${styles['title-text']}`}>{testData}</div>
        </div>
      </div>
    );
  }
}

export default ItemTitle;
