import React from 'react'
import ItemTitle from './itemTitle'

import ListItem from '@/components/listItem/listItem'

import styles from './recList.less'
// 推荐歌单
class RecList extends React.Component {

  render() {
    let { recData } = this.props
    let list = recData.creatives.map((item, index) => {
      return (
        <ListItem className={`${styles['list-item']}`} />
      )
    })

    console.log(this.props);
    return (
      <div>
        <ItemTitle title={recData.uiElement.subTitle.title} />
        <div className={`${styles['list-warp']}`}>
        {list}
        </div>
      </div>
    )
  }
}


export default RecList
