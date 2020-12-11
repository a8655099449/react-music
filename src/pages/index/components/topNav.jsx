import React from 'react'

import styles from './topNav.less';

class TopNav extends React.Component {

  render(){

    return(
      <div className={styles['top-bar']}>
        <div className={styles['content'] + ' content-box'}>
          首页nav
        </div>
      </div>
    )
  }
}


export default TopNav
