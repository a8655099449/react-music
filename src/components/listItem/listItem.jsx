import React from 'react'
// 歌单小单元
import styles from './listItem.less';

class ListItem extends React.Component {

  render(){
    let clsName = this.props.className || ''
    return(
      <div className={`${styles['list-item']} ${clsName}`}>
        小单元
      </div>
    )
  }
}


export default ListItem
