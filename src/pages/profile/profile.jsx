// import React from 'react'
import { dynamic } from 'umi';


export default dynamic({
  loader: async function() {
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    // const { default: HugeA } = ;
    return await import(/* webpackChunkName: "profile" */ './index');
  },
});

/* 
class Profile extends React.Component {

  render(){

    return(
      <div>
        我是个人中心
      </div>
    )
  }
}


export default Profile
 */