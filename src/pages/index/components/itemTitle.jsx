import React from 'react'
import styles from './itemTitle.less'
class ItemTitle extends React.Component {

  render() {
    // console.log(this.props);


    let title = this.props.title
    console.log(title);
    let testData = typeof (title) == 'string' ? title : JSON.stringify(title)
    // let title = '标题'
    // if (item.subTitle && item.subTitle.title) {
    //   title = item.subTitle.title
    // }
    // // let title = item.subTitle.title? item.subTitle.title :'没有标题'
    // console.log(item);
    return (
      <div className={`${styles['item-tit']}`}>
        <div>
          <i className={`iconfont icon-changpian2`}></i>
          <div className={`${styles['title-text']}`}>
            {testData}
          </div>
        </div>
      </div>
    )
  }
}


export default ItemTitle
