import React from 'react'

import styles from './topNav.less';

class TopNav extends React.Component {

  state = {
    list: [
      { name: '推荐' },
      { name: '排行榜' },
      { name: '歌单' },
    ]


  }


  render() {

    let navList = this.state.list.map((item, index) => {
      return (
        <div className={styles['nav-item'] + ' click'} key={index}>
          {item.name}
        </div>
      )
    })


    return (
      <div className={styles['top-bar']}>
        <div className={styles['content'] + ' content-box'}>
         {navList}
        </div>
      </div>
    )
  }
}


export default TopNav
