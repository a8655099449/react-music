import React from 'react'
import styles from './navBar.less'
import { history } from 'umi';
const navList = [
  {
    name: '发现音乐',
    path: '/'
  },
  {
    name: '我的音乐',
    path: 'profile'
  },
  {
    name: '朋友',
    path: ''
  },
  {
    name: '商城',
    path: ''
  },
]



class NavBar extends React.Component {

  state={
    navList,
    activeIndex:0
  }
  handelNavChange = (item,activeIndex) => {
    
    this.setState({activeIndex})
    history.push(item.path)
  }

  render() {

    
    let navlistContent = this.state.navList.map((item, index) => {


      let className = index === this.state.activeIndex ? `${styles['list-item']} click ${styles['active']}` : styles['list-item'] + ' click'

      return (

        <div className={className} 
        key={index}
        onClick={()=>{
          this.handelNavChange(item,index)
        }}>
          {item.name}
        </div>
      )
    })



    return (
      <header className={styles['nav-bar']}>
        <div className={styles['content']}>
          <div className={styles['log-box']}>

          </div>
          <div className={styles['nav-list']}>
            {navlistContent}
          </div>
        </div>
      </header>
    )
  }
}


export default NavBar